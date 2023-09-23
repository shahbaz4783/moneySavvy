import { ItemForm } from "./ItemForm"
import { useState } from "react";

export const FormModal = (props) => {
			const saveItemDataHandler = (enteredItedData) => {
				const itemData = {
					...enteredItedData,
					id: Math.random().toString(),
				};
                props.onAddItem(itemData)
			};

            const [formUse, setFormUse] = useState(false)

            const formUseHandler = () => {
                setFormUse(true)
            }

            const cancelForm = () => {
                setFormUse(false)
            }

  return (
		<div className='form-modal'>
			{!formUse && (
				<button className='addItemBtn' onClick={formUseHandler}>
					Add Item
				</button>
			)}
			{formUse && (
				<ItemForm onCancel={cancelForm} onSaveItemData={saveItemDataHandler} />
			)}
		</div>
	);
}
