import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Div, Image, Modal, Text } from 'react-native-magnus';
import If from '../../components/utils/conditional';

type FeedbackType = 'success' | 'error' | null;

interface Dialog {
  message: string;
  type: FeedbackType;
  isOpen: boolean;
}

export interface FeedbackDialogData {
  feedbackDialog: Dialog;
  showFeedbackDialog(message: string, type: FeedbackType): void;
  hideFeedbackDialog(): void;
}

export const FeedbackDialogContext = createContext<FeedbackDialogData>(
  {} as FeedbackDialogData,
);

export const FeedbackDialogProvider: React.FC = ({ children }) => {
  const [feedbackDialog, setFeedbackDialog] = useState<Dialog>({
    message: '',
    type: null,
    isOpen: false,
  });

  const showFeedbackDialog = useCallback(
    (message: string, type: FeedbackType) => {
      setFeedbackDialog({
        message,
        type,
        isOpen: true,
      });
    },
    [],
  );

  const hideFeedbackDialog = useCallback(() => {
    setFeedbackDialog({
      message: '',
      type: null,
      isOpen: false,
    });
  }, []);

  useEffect(() => {
    if (feedbackDialog.isOpen) {
      setTimeout(() => {
        hideFeedbackDialog();
      }, 3000);
    }
  }, [feedbackDialog.isOpen, hideFeedbackDialog]);

  return (
    <FeedbackDialogContext.Provider
      value={{
        feedbackDialog,
        showFeedbackDialog,
        hideFeedbackDialog,
      }}
    >
      {children}
      <Modal isVisible={feedbackDialog.isOpen}>
        <Div flex={1} alignItems="center" justifyContent="center">
          <If condition={!!feedbackDialog.type}>
            <Div>
              <Image
                source={{
                  uri:
                    feedbackDialog.type === 'success'
                      ? 'https://cdn-icons-png.flaticon.com/512/716/716225.png'
                      : 'https://cdn-icons-png.flaticon.com/512/753/753345.png',
                }}
                height={100}
                width={100}
              />
            </Div>
          </If>

          <Text fontWeight="bold" color="gray700" mt="lg">
            {feedbackDialog.message}
          </Text>
        </Div>
      </Modal>
    </FeedbackDialogContext.Provider>
  );
};
