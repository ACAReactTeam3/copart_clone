import { Alert } from "@mui/material";
import { forwardRef } from "react";

export const CustomizedAlert = forwardRef(function CustomizedAlert(props, ref) {
  return (
    <Alert
      sx={{ width: 235, ml: 10, mb: 0 }}
      variant="filled"
      severity="error"
      {...props}
      ref={ref}
    >
      Դաշտը պարտադիր է լրացնել
    </Alert>
  );
});

export function checkEmptyFilds(
  catAndType,
  carDescription,
  priceList,
  location,
  additionalInfo
) {
  const catType = ["Մարդատար", "Ավտոբուս", "Կցասայլ"].includes(
    catAndType.category
  )
    ? true
    : catAndType.categoryType
    ? true
    : false;

  const isTrue =
    !!catAndType.category &&
    catType &&
    !!carDescription.selectedBrand &&
    !!carDescription.model &&
    !!carDescription.year &&
    !!carDescription.carBodyType &&
    !!carDescription.carMileage &&
    !!carDescription.mileageType &&
    !!carDescription.selGearbox &&
    !!carDescription.selSteeringWheel &&
    !!carDescription.selFuel &&
    !!carDescription.selColor &&
    !!priceList.price &&
    !!priceList.currency &&
    !!priceList.sellCustomsCleared &&
    !!priceList.sellCarState &&
    !!location.country &&
    !!additionalInfo.phoneNum &&
    additionalInfo.phoneNum.length === 15;
  return isTrue;
}

export function trueQuantity(carDescription) {
  const quantityTrue = [
    !carDescription.selectedBrand,
    !carDescription.model,
    !carDescription.year,
    !carDescription.carBodyType,
    !carDescription.carMileage,
    !carDescription.mileageType,
    !carDescription.selGearbox,
    !carDescription.selSteeringWheel,
    !carDescription.selFuel,
    !carDescription.selColor,
  ];

  return quantityTrue.reduce(
    (sum, item) => (item ? (sum += 1) : (sum += 0)),
    0
  );
}
