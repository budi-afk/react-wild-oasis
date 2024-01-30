import Row from "../ui/Row";
import Heading from "../ui/Heading";
import UpdateSettingForm from "../features/settings/UpdateSettingsForm";

function Settings() {
  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingForm />
    </Row>
  );
}

export default Settings;
