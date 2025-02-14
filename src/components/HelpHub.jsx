import { HelpHub } from '@questlabs/react-sdk';
import { useAuth } from '../context/AuthContext';
import questConfig from '../config/questConfig';

export default function AppHelp() {
  const { user } = useAuth();
  
  return (
    <HelpHub
      uniqueUserId={user?.id || questConfig.USER_ID}
      questId={questConfig.QUEST_HELP_QUESTID}
      accent={questConfig.PRIMARY_COLOR}
    />
  );
}