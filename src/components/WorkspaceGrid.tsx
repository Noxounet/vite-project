import React from 'react';
import WorkspaceCard from "./WorkspaceCard.tsx";
import { Workspace } from "../types.ts";

interface WorkspaceGridProps {
    workspaces: Workspace[];
}

const WorkspaceGrid: React.FC<WorkspaceGridProps> = ({ workspaces }) => {
    return (
        <div className="card-container">
            {workspaces.map((workspace) => (
                <WorkspaceCard key={workspace.id} workspace={workspace} />
            ))}
        </div>
    );
};

export default WorkspaceGrid;