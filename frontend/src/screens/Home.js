import React from "react";

function Home() {
  const dispatch = useDispatch();
  const { is_paid } = useSelector((state) => state.appointmentsList);

  const handleClick = () => {
    dispatch(setUserDate(""));
    dispatch(setUserService({}));
    dispatch(setBarber({}));
    dispatch(setAppointmentIsPaid(false));
  };

  if (is_paid == true) {
    return (
      <div>
        <p>Succesfully added appointment</p>
        <Button onClick={handleClick}>Okay</Button>
      </div>
    );
  } else {
    return <div>Home</div>;
  }
}

export default Home;
