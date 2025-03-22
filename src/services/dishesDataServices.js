import {db} from "./firebase";
import { ref, set, push, remove, get } from "firebase/database";

const dbRef = ref(db, "/dishes");

const getAllDishes = () => {
    return get(dbRef);
}

//import dishes from json file if the database is empty
const importDishes = (dishes) => {
    if (get(dbRef).length > 0) {
        return;
    }
    set(dbRef, dishes);
}

const addDish = (dish) => {
    push(dbRef, dish);
}

const deleteDish = (dish) => {
    remove(ref(db, `/dishes/${dish.id-1}`));
}

export default { getAllDishes, importDishes, addDish, deleteDish };