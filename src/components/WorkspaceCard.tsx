import React from 'react';
import { Workspace } from "../types.ts";

interface WorkspaceCardProps {
    workspace: Workspace;
}

const WorkspaceCard: React.FC<WorkspaceCardProps> = ({ workspace }) => {
    return (
        <div className="card">
            <h3>{workspace.name}</h3>
            <ul>
                <li><strong>CPU:</strong> {workspace.cpu}</li>
                <li><strong>GPU:</strong> {workspace.gpu}</li>
                <li><strong>RAM:</strong> {workspace.ram}</li>
                <li><strong>Storage:</strong> {workspace.storage}</li>
                <li><strong>Monitors:</strong> {workspace.monitors}</li>
            </ul>
            <div className="card-actions">
                <button>Edit</button>
                <button>View Details</button>
            </div>
        </div>
    );
};

export default WorkspaceCard;