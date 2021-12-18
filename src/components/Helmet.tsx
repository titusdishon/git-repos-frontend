import React from "react";
import { Helmet } from "react-helmet";

type Props = {
  title: string;
};
const CreateHelmet: React.FC<Props> = ({ title }: Props) => {
  return (
    <div>
      <Helmet title={title}>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
    </div>
  );
};

export default CreateHelmet;
