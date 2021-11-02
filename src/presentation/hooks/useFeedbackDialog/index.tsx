import { useContext } from 'react';
import {
  FeedbackDialogContext,
  FeedbackDialogData,
} from '../../contexts/feedbackDialog';

const useFeedbackDialog = (): FeedbackDialogData => {
  const contextToast = useContext(FeedbackDialogContext);

  return contextToast;
};

export default useFeedbackDialog;
