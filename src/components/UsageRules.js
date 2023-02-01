import React from "react";
import { createUseStyles } from "react-jss";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const useStyles = createUseStyles({
  "@global": {
    body: {
      backgroundColor: "brown",
      lineHeight: 2.5,
    },
  },
  header: {
    fontSize: "16px",
  },
});

export default function UsageRules() {
  let classes = useStyles();
  return (
    <Container sx={{ mt: 8 }}>
      <Box sx={{ height: "100vh", mt: 8, maxWidth: "960px" }}>
        <div>
          <p className={classes.header}>Օգտագործման կանոնները</p>
          <p>Հարգելի օգտատեր</p>
          <p>
            Գրանցվելով Auto.am կայքում կամ հավելվածում` Դուք ընդունում եք սույն{" "}
            <strong>Օգտագործման կանոնները</strong>
          </p>
          <p>
            - Auto.am կայքը պատասխանատվություն չի կրում կայքում տեղադրված
            ավտոմեքենաների վաճառքի վերաբերյալ հայտարարությունների բովանդակության
            համար (գին, ավտոմեքենայի / տրանսպորտային միջոցի վերաբերյալ
            տեղեկատվության ճշգրտություն և այլն):
          </p>
        </div>
      </Box>
    </Container>
  );
}
