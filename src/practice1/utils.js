export const getURL = (address, port, path) => {
  let url = address + ":" + port + path;
  return url;
};
