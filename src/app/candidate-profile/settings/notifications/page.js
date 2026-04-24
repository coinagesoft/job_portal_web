import SettingsPageShell from '../components/SettingsPageShell';

const NOTIFICATION_PREFERENCES = [
  {
    id: 'application-updates',
    title: 'Application status updates',
    description: 'Get notified when application stages change for your saved and applied jobs.',
    enabled: true
  },
  {
    id: 'job-recommendations',
    title: 'Personalized job recommendations',
    description: 'Receive role suggestions based on your profile skills and activity.',
    enabled: true
  },
  {
    id: 'interview-reminders',
    title: 'Interview reminders',
    description: 'Receive reminders before interview schedules and recruiter follow-ups.',
    enabled: true
  },
  {
    id: 'marketing',
    title: 'Product tips and offers',
    description: 'Occasional messages about features, campaigns, and premium benefits.',
    enabled: false
  }
];

const RECENT_NOTIFICATIONS = [
  {
    id: 1,
    title: 'Interview Scheduled',
    message: 'Adobe Illustrator: Technical interview on 16 Apr 2026 at 11:30 AM.',
    time: '2 hours ago'
  },
  {
    id: 2,
    title: 'Portfolio Requested',
    message: 'LinkedIn asked you to upload an updated portfolio before 18 Apr 2026.',
    time: 'Yesterday'
  },
  {
    id: 3,
    title: 'Application Update',
    message: "Bing Search moved your application to 'In Review'.",
    time: '2 days ago'
  }
];

export const metadata = {
  title: 'Notifications - Job Portal',
  description: 'Candidate notification preferences'
};

const CandidateNotificationsSettingsPage = () => {
  return (
    <SettingsPageShell
      title="Notification Settings"
      description="Choose what you want to hear about and how frequently you receive candidate updates."
    >
      <div className="candidate-settings-card mb-25">
        <h5 className="mb-15">Notification Preferences</h5>
        <p className="font-sm color-text-paragraph-2 mb-20">
          Changes here affect email and in-app notifications for your account.
        </p>

        <div className="candidate-notification-list">
          {NOTIFICATION_PREFERENCES.map((item) => (
            <div key={item.id} className="candidate-notification-item">
              <div className="candidate-notification-copy">
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
              <label className="candidate-switch" htmlFor={item.id}>
                <input id={item.id} type="checkbox" defaultChecked={item.enabled} />
                <span className="candidate-switch-slider"></span>
              </label>
            </div>
          ))}
        </div>

        <div className="candidate-settings-actions mt-20">
          <button type="button" className="btn btn-default btn-small">
            Reset
          </button>
          <button type="button" className="btn btn-brand-1 btn-small">
            Save Notification Settings
          </button>
        </div>
      </div>

      <div className="candidate-settings-card">
        <h5 className="mb-15">Recent Notifications</h5>
        <div className="candidate-feed-list">
          {RECENT_NOTIFICATIONS.map((item) => (
            <div key={item.id} className="candidate-feed-item">
              <div className="candidate-feed-bullet"></div>
              <div className="candidate-feed-content">
                <strong>{item.title}</strong>
                <p>{item.message}</p>
              </div>
              <span className="candidate-feed-time">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </SettingsPageShell>
  );
};

export default CandidateNotificationsSettingsPage;
