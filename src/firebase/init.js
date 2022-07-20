import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
import  {getFirestore} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'

import config from './config.js'

const inicta= initializeApp(config);
const db = getFirestore(inicta)

export { initializeApp, inicta, db}
