import { ItemForm } from "./ItemForm"

export const FormModal = () => {
			const saveItemDataHandler = (enteredItedData) => {
				const itemData = {
					...enteredItedData,
					id: Math.random().toString(),
				};
				console.log(itemData);
			};
  return (
		<div className='form-modal'>
			<ItemForm onSaveItemData={saveItemDataHandler} />
		</div>
	);
}
