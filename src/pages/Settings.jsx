import Row from "../ui/Row";
import Heading from "../ui/Heading";
import UpdateSettingForm from "../features/settings/UpdateSettingsForm";
import { useSetting } from "../features/settings/useSetting";
import Spinner from "../ui/Spinner";

function Settings() {
  const { isLoading, settings } = useSetting();
  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      {isLoading ? <Spinner /> : <UpdateSettingForm settings={settings} />}
    </Row>
  );
}

export default Settings;
