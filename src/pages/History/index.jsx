import HistoryContainer from './containers/HistoryContainer';
import { HistoryProvider } from './context/HistoryContext';

export const HistoryPage = () => {
    return (
        <HistoryProvider>
            <HistoryContainer />
        </HistoryProvider>
    );
}
