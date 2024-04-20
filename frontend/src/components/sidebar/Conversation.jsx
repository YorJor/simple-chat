import { useNavigate } from 'react-router-dom';

const Conversation = ({conversation, lastIdx, emoji }) => {
    
	const navigate = useNavigate();
	const handleSelectConversation = async () => {
		navigate(`/room/${conversation._id}`);
	};

	return (
		<>
			<div
				className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
			`}
				onClick={handleSelectConversation}
			>
				<div className='flex flex-col flex-1 overflow-hidden'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200 truncate w-2/3'>{conversation.name}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>
			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
		</>
	);
};
export default Conversation;

