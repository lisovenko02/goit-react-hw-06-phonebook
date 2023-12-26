import { useDispatch, useSelector } from "react-redux"
import { Button, Contact, List, ListItems } from "./ContactList.styled"
import { deleteContact } from "../../redux/contactsSlice"

export const ContactList = () => {
    const items = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch();
    const visibleCardItems = getVisibleCardItems(items, filter)
    
    function getVisibleCardItems (items, filter) {
        return items.filter(item => 
            item.name.toLowerCase().includes(filter))
    };

    return (
        <List>
            {visibleCardItems.map(item => (
             <ListItems key={item.id}>
                <Contact>{item.name} : {item.number}</Contact>
                <Button onClick={() => dispatch(deleteContact(item.id))}>Delete</Button>
             </ListItems>   
            )
                )}
        </List>
    )
    
};