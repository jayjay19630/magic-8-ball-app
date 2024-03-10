const localBackendURL = process.env.LOCAL_BACKEND_URL;
const hostBackendURL = process.env.HOST_BACKEND_URL;
const isLocalDeploy = process.env.LOCAL_DEPLOY === "TRUE";

const BACKEND_URL = isLocalDeploy ? localBackendURL : hostBackendURL;

export default BACKEND_URL;
