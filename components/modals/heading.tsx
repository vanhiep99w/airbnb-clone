interface Props {
  title: string;
  subTitle?: string;
  center?: boolean;
}
const Heading = ({ title, subTitle, center }: Props) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <p className="text-2xl font-bold">{title}</p>
      <div className="mt-2 font-light text-neutral-500">{subTitle}</div>
    </div>
  );
};

export default Heading;
