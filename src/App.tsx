import React from 'react';
import WorkspaceGrid from "./components/WorkspaceGrid.tsx";
import { Workspace } from "./types.ts";
import './App.css';

const App: React.FC = () => {
    // Example workspace data
    const workspaces: Workspace[] = [
        {
            id: 1,
            name: 'Workspace #1',
            cpu: 'Intel i7-12700K',
            gpu: 'NVIDIA RTX 3080',
            ram: '32GB DDR4',
            storage: '1TB SSD',
            monitors: '2x 27" 4K',
        },
        {
            id: 2,
            name: 'Workspace #2',
            cpu: 'AMD Ryzen 9 5900X',
            gpu: 'NVIDIA RTX 3070',
            ram: '16GB DDR4',
            storage: '512GB SSD',
            monitors: '1x 24" 1080p',
        },
        {
            id: 3,
            name: 'Workspace #3',
            cpu: 'Intel i5-12600K',
            gpu: 'NVIDIA GTX 1660 Super',
            ram: '16GB DDR4',
            storage: '1TB HDD',
            monitors: '1x 27" 1440p',
        },
        {
            id: 4,
            name: 'Workspace #4',
            cpu: 'AMD Ryzen 5 5600X',
            gpu: 'NVIDIA RTX 3060 Ti',
            ram: '32GB DDR4',
            storage: '1TB NVMe SSD',
            monitors: '2x 24" 1080p',
        },
        {
            id: 5,
            name: 'Workspace #5',
            cpu: 'Intel i9-13900K',
            gpu: 'NVIDIA RTX 4090',
            ram: '64GB DDR5',
            storage: '2TB NVMe SSD',
            monitors: '3x 32" 4K',
        },
        {
            id: 6,
            name: 'Workspace #6',
            cpu: 'AMD Ryzen 7 5800X',
            gpu: 'NVIDIA RTX 3080 Ti',
            ram: '32GB DDR4',
            storage: '1TB SSD + 2TB HDD',
            monitors: '2x 27" 1440p',
        },
        {
            id: 7,
            name: 'Workspace #7',
            cpu: 'Intel i3-12100F',
            gpu: 'NVIDIA GTX 1650',
            ram: '8GB DDR4',
            storage: '512GB SSD',
            monitors: '1x 22" 1080p',
        },
        {
            id: 8,
            name: 'Workspace #8',
            cpu: 'AMD Ryzen 9 7950X',
            gpu: 'NVIDIA RTX 4080',
            ram: '64GB DDR5',
            storage: '2TB NVMe SSD',
            monitors: '4x 27" 4K',
        },
        {
            id: 9,
            name: 'Workspace #9',
            cpu: 'Intel i7-11700K',
            gpu: 'NVIDIA RTX 3070',
            ram: '16GB DDR4',
            storage: '1TB SSD',
            monitors: '2x 24" 1080p',
        },
        {
            id: 10,
            name: 'Workspace #10',
            cpu: 'AMD Ryzen 5 3600',
            gpu: 'NVIDIA GTX 1660 Ti',
            ram: '16GB DDR4',
            storage: '512GB SSD',
            monitors: '1x 27" 1440p',
        },
    ];

    return (
        <div className="App">
            <h1>Workspace Tracker</h1>
            <WorkspaceGrid workspaces={workspaces} />
        </div>
    );
};

export default App;