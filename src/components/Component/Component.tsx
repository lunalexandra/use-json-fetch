import { useJsonFetch } from "../useJsonFetch/useJsonFetch"

interface ComponentProps {
    url: string;
}

export const Component: React.FC<ComponentProps> = ({ url }) => {
    const [data, error, loading] = useJsonFetch(url);
    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {`${error}`}</div>;

    return (
        <div>
            <h2>Данные:</h2>
            <pre>{JSON.stringify(data)}</pre>
        </div>
    );
}