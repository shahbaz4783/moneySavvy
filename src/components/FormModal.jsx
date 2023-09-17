import { ItemForm } from "./ItemForm"

export const FormModal = (props) => {
			const saveItemDataHandler = (enteredItedData) => {
				const itemData = {
					...enteredItedData,
					id: Math.random().toString(),
				};
                props.onAddItem(itemData)
			};
  return (
		<div className='form-modal'>
			<ItemForm onSaveItemData={saveItemDataHandler} />
		</div>
	);
}
