import { Auth } from 'aws-amplify';
import { fetchUserProfileFromAPI } from 'service/userProfileService';

export const tokenLoader = async () => {
  const userdata = await Auth.currentSession();
  const token = userdata.getIdToken().getJwtToken();

  const userProfile = await fetchUserProfileFromAPI(token);
  const isFirstTime = userProfile.data.is_found === false;

  return { userProfile: userProfile.data, isFirstTime, token };
};
