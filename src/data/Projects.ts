export type Project = {
    title: string
    description: string
    technologies: string[]
    
    githubUrl: string
}

export const projects: Project[] = [
    {
        title: 'TrackFlow',
        description:
            'A simple web application that allows tracking of shipment and displaying shipment direction on a map.', 
        technologies: ['React', 'TypeScript','python', 'FastAPI',  'PostgreSQL', 'Tailwind CSS'],
        
        githubUrl: 'https://github.com/willsblaq05/Track-Flow'},

        {
        title: 'Budget System API',
        description:
            "A financial API for managing transactions, categories, budgets,and analytics. It provides endpoints for creating, retrieving, updating, and deleting financial data, enabling users to track their expenses and income effectively.",
        technologies: ['Python', 'FastAPI', 'PostgreSQL' ,'SQLModel', 'Pydantic', 'Alembic', 'JWT Authentication', ],
        githubUrl: 'https://github.com/willsblaq05/Budget-System-API'
        }
    ]