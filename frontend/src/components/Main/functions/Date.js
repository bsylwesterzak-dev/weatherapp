export const getDate = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const date = new Date();
    return {
        day: date.getDate(),
        month: monthNames[date.getMonth()]
    }
}