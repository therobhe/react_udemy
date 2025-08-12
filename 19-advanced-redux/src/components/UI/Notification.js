import classes from "./Notification.module.css";

const Notification = (props) => {
  console.log(props);
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    console.log("Success found");
    specialClasses = classes.success;
    console.log("specialClasses", specialClasses);
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
