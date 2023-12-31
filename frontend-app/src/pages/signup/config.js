import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig=
{
    "apiKey": 'AIzaSyChgx8VID7OVGEdR-Y2pqAAZMKvgkPC1ss',
    "authDomain": 'userauth-f78ef.firebaseapp.com',
    "type": "service_account",
    "project_id": "userauth-f78ef",
    "private_key_id": "225411dea7156eac624195c6115c498fb95ab2d0",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCoy0GEkYyzo9BM\nRNcvYOpzRrJ/XvfmMCrpYvnkTNQdVe/0CEaU6O780h8XPD6mKXBQsDV14viresks\nESAuONcskhnPtji+8Y6pFIcRn9yRtJ84RItTfmU2r9AINRczGTqFhQPaPym/r7CS\n8g8Ow1oIgR/O008EYvdtlOWPYrXz8yz1OScQ99vXSRgwGKniizK5SZsJGG7VWFZw\nu5GXcUQtwHgIQtIl/vnznkKnlv6jU8h0ESKb6/yJm4/39qVIwQYRqZlaXdoSIjrB\nZCiTMzfI8OI7PCN8thjFaycikFmdaupSQJdkc9PuSrfMvTbjqp64LX4ljF/TU8bd\n5JqzelcVAgMBAAECggEABL1aXF7a6NNtfqrDMRcjVjPSwM1ZoCrTlaScGDtJDH7U\ng1F1K+rDhTFgQp6EMtXAi996zNHgAi6rNfPQJ8QcVKnQlDrNap0tUJWdOlM3FhdQ\njjusft5yeJ/ks0pMWbi4YjXrNwZlhXapOmMWJae6IDmB+2SHGDwwLvFKpeVTbyNl\n9R7pUQJTnH6+XX01KoMMzISobNn4KBo+r91/oDra9SACHtjF4n9zZ/5f4Gx03ko0\nZFGgS4JIhz2ypIhm65fwVG7mIjoRQOLFfnzowzyYbrAWr8KnP4n6cA7EylevBr2q\nWfvql0fzTrTm1gw42LhUG1zNicDslWTcSynIGiSh2QKBgQDiViriOIp9jXu4zRxl\nv13VCkNi5GE8DXqNGnoajJL2DkUntnL9wKnkj1DjaPHaM5bRsMm5IHntWlLbDC4l\nkNCXTwhuyDJbreE+UFl9t/niT9TDL5RcP6CX0oGBb4wNlQHvnR+KElz7JYyusCWC\n4+uogoFkA+9/Cz782d/MrL8rLQKBgQC+6njxAcsCJtX7b/tx1vvMi8zg4mirNN+6\ngZkSXQ0XEoOpO2UZUpwl60VbPRGKBe8Ez09BidUrzbNaFXnErwVYRtunRFgDHEuB\ndzX3Pji4GTlr9d82iS5obOtoRB0cpB5nFuMjEGw/vVdC0LL70snfDkgPV6DLu0GF\nrIHUQxKsiQKBgGz7GIL8vpJdwajl+jpzvnaKDpBbbwY/Zzbx/MEz1r9rd5j7nLra\nPfOznjshmPJ7zK8C9N6S6KKEz0hxwPaNmCKDB4hwFO9X9hDPF4gVQdjan5OsIT+Z\n03XHAlyUnVcc3GXHvhv5Y5P6LJcgca9ol1v4Gt1Rl8wQWi/dqIkg1JuxAoGBAI2Y\n2/BsUwQah7R//q8VMxYnTeIxKk5o3dK3Ui+TgiTtn2cB3V7lrVhWYc9kwMBs3DTm\nCTNjpg5h9zbGHNUqtj0d+MXbY6eS8dFo+EaTCIBKfRM8fbw2DIx41DQ16J2Yf9AX\n4ojcIl038iNlJIqvcPgV4I44gNL55IPfST+EK7J5AoGAHvJImmBTiBJDwpcL6zCS\nKvnP/iDTIgfsZY8sOHNlTaFqff6riS9smyfiSvngE/VKZY+EwGU/zFFpU988GLn5\nDPC5Cepq+jWxK11jY7I/5l0MYIs1CiHBNAmqN/WuT+6crBpnLodu/6Pg6GmNxent\nDoO1F+ZyILmyBYHGlwF0UcE=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-6m3cw@userauth-f78ef.iam.gserviceaccount.com",
    "client_id": "109593144150840761322",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-6m3cw%40userauth-f78ef.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
  
 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};