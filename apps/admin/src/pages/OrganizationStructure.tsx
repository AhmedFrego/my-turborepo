import 'reactflow/dist/style.css';

import { Box } from '@mui/material';
import dagre from 'dagre';
import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactFlow, {
	addEdge,
	Background,
	BackgroundVariant,
	Connection,
	ConnectionLineType,
	Controls,
	Edge,
	MiniMap,
	Node,
	Position,
	useEdgesState,
	useNodesState,
} from 'reactflow';
import { Title } from 'src/components';
import { AdminRoutes } from 'src/constants';
import { useCreatePath, useInfiniteGetList, useTranslate } from 'src/hooks';
import { PublicTables } from 'src/types';

const position = { x: 0, y: 0 };

type Direction = 'LR' | 'TB';

const nodeWidth = 172;
const nodeHeight = 36;

const dagreGraph = new dagre.graphlib.Graph();

dagreGraph.setDefaultEdgeLabel(() => ({}));

const getLayoutElements = <
	N extends Node[] = Node[],
	E extends Edge[] = Edge[],
>(
	nodes: N,
	edges: E,
	direction: Direction = 'TB',
) => {
	const isHorizontal = direction === 'LR';

	dagreGraph.setGraph({ rankdir: direction });

	for (const node of nodes) {
		dagreGraph.setNode(node.id, { height: nodeHeight, width: nodeWidth });
	}

	for (const edge of edges) {
		dagreGraph.setEdge(edge.source, edge.target);
	}

	dagre.layout(dagreGraph);

	for (const node of nodes) {
		const nodeWithPosition = dagreGraph.node(node.id);

		node.targetPosition = isHorizontal ? Position.Left : Position.Top;
		node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;

		// We are shifting the dagre node position (anchor=center center) to the top left
		// so it matches the React Flow node anchor point (top left).
		node.position = {
			x: node.position.x + nodeWithPosition.x - nodeWidth / 2,
			y: node.position.y + nodeWithPosition.y - nodeHeight / 2,
		};
	}

	return { edges, nodes };
};

export interface OrganizationStructureProps {}

export const OrganizationStructure: React.FC<
	OrganizationStructureProps
> = () => {
	const translate = useTranslate();
	const createPath = useCreatePath();
	const navigate = useNavigate();

	const options = {
		pagination: { page: 1, perPage: 1000 },
	};

	const entities = useInfiniteGetList('entities', options);

	const departments = useInfiniteGetList('departments', options);

	const workLocations = useInfiniteGetList('work_locations', options);

	const entityTypes = useInfiniteGetList('entity_types', options);

	const { pages: entitiesPages = [] } = entities.data ?? {};
	const { pages: departmentsPages = [] } = departments.data ?? {};
	const { pages: workLocationsPages = [] } = workLocations.data ?? {};
	const { pages: entityTypesPages = [] } = entityTypes.data ?? {};

	const [nodes, setNodes, onNodesChange] = useNodesState([]);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);

	useEffect(() => {
		const entities = entitiesPages.flatMap(item => item.data);
		const departments = departmentsPages.flatMap(item => item.data);
		const workLocations = workLocationsPages.flatMap(item => item.data);
		const entityTypes = entityTypesPages.flatMap(item => item.data);

		const remoteNodes: Node[] = [];

		const remoteEdges: Edge[] = [];

		for (const { id, name } of workLocations) {
			remoteNodes.push({
				data: { label: name, type: 'work_locations' },
				id,
				position,
				style: {
					background: 'red',
					color: 'white',
				},
			});
		}

		for (const { entity_type_id, id, name } of entities) {
			const level =
				entityTypes.find(item => item.id === entity_type_id)?.level ?? 'branch';

			const levelsColors = {
				administration: 'black',
				branch: 'lightGrey',
				company: 'grey',
			};

			const levelsHeights = {
				administration: -400,
				branch: -200,
				company: -300,
			};

			remoteNodes.push({
				data: { label: name, type: 'entities' },
				id,
				position: {
					x: 0,
					y: levelsHeights[level],
				},
				style: {
					background: levelsColors[level],
					color: 'white',
				},
			});
		}

		for (const { id, name } of departments) {
			remoteNodes.push({
				data: { label: name, type: 'departments' },
				id,
				position: {
					x: 0,
					y: -100,
				},
				style: {
					background: '#2B6CB0',
					color: 'white',
				},
			});
		}

		for (const item of entities) {
			const { id: itemId } = item;

			const children = entities.filter(ent => ent.parent_id === itemId);

			for (const child of children) {
				const { id: childId } = child;

				remoteEdges.push({
					id: itemId + childId,
					source: itemId,
					target: childId,
				});
			}
		}

		for (const item of workLocations) {
			const { entity_id, id: itemId } = item;

			remoteEdges.push({
				id: itemId + entity_id,
				source: entity_id,
				target: itemId,
			});
		}

		for (const item of departments) {
			const { entity_id, id: itemId } = item;

			remoteEdges.push({
				id: itemId + entity_id,
				source: entity_id,
				target: itemId,
			});
		}

		const { edges, nodes } = getLayoutElements(remoteNodes, remoteEdges);

		setNodes(nodes);
		setEdges(edges);
	}, [
		departmentsPages,
		entitiesPages,
		entityTypesPages,
		setEdges,
		setNodes,
		workLocationsPages,
	]);

	const onConnect = useCallback(
		(params: Connection) =>
			setEdges(eds =>
				addEdge(
					{ ...params, animated: true, type: ConnectionLineType.SmoothStep },
					eds,
				),
			),
		[setEdges],
	);

	const onNodeClick = (
		_: React.MouseEvent,
		node: Node<{ type: PublicTables }>,
	) =>
		navigate(
			createPath({
				id: node.id,
				resource: node.data.type,
				type: 'show',
			}),
		);

	return (
		<Box
			height="100%"
			width="100%"
		>
			<Title
				title={translate(`custom.pages.${AdminRoutes.OrganizationStructure}`)}
			/>
			<ReactFlow
				fitView
				connectionLineType={ConnectionLineType.SmoothStep}
				edges={edges}
				nodes={nodes}
				onConnect={onConnect}
				onEdgesChange={onEdgesChange}
				onNodeClick={onNodeClick}
				onNodesChange={onNodesChange}
			>
				<Controls />
				<MiniMap />
				<Background
					gap={12}
					size={1}
					variant={BackgroundVariant.Cross}
				/>
			</ReactFlow>
		</Box>
	);
};
