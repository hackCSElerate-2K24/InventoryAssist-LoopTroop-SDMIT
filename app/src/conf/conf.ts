const conf = {
  appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appWriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT),
}

console.log(conf);

export default conf;