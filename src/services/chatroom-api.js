const api = {
    storage: localStorage,
    saveChatRooms(chatRoom) {
        const json = JSON.stringify(chatRoom);
        api.storage.setItem('chatRoom', json);
    },
    getChatRooms() {
        const json = api.storage.getItem('chatRoom');
        const chatRoom = JSON.parse(json);
        return chatRoom;
    }
};

export default api;