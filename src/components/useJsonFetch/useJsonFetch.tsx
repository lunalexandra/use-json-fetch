import { useEffect, useState} from "react"

interface Data {
    status: string;
}

export const useJsonFetch  = (url:string) => {
const [data, setData] = useState<Data | null>(null);
const [error, setError] = useState<string | null>(null);
const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchData = async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`${response.status}`);
            }

            const jsonData = await response.json();
            
            setData(jsonData);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Неизвестная ошибка');
            }
        } finally {
            setLoading(false);
        }
    }
      fetchData();

    }, [url]);

    return [data, error, loading]  as [Data | null, string | null, boolean];
}