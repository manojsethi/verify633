import * as mongoose from 'mongoose';
import databaseConfig from './db/database.config';
import BASE_CLIENTS_MODEL, { BaseClients } from './models/clients';

(async () => {
  await mongoose.connect(`mongodb+srv://T9bd6gf47CWrgQKD:RWrqz2N4M44KbsFw@cluster0.3qybf.mongodb.net?retryWrites=true&w=majority`);
  const client_id = databaseConfig.getModelForDb<typeof BaseClients>('base_db', BASE_CLIENTS_MODEL);
  //base_db is a dynamic name, for testing purpose it is hardcoded.
  const found_users = await client_id.findById(new mongoose.Types.ObjectId('619cee5091f3aaedfd5f8d80')).populate(['role']);
  console.log(found_users);
  await mongoose.disconnect();
})();
