import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
export const showSuccessMessage = (message, timeout) => {
  NotificationManager.success(message, 'Success', 2000);
};

export const showErrorMessage = (message, timeout) => {
  NotificationManager.error(message, 'Error', 2000);
};
