{
  //* Typeof type operator
  ((): void => {
    const center = {
      x: 0,
      y: 0,
      z: 0,
    };

    // type Point = typeof center;

    // Inline
    const unit: typeof center = {
      x: center.x + 1,
      y: center.y + 1,
      z: center.z + 1,
    };
    console.log("unit:", unit);

    // Create a type from JSON
    const response = {
      email: "john.doe@example.com",
      firstName: "John",
      lastName: "Doe",
    };

    type PersonResponse = typeof response;

    function processResponse(person: PersonResponse): void {
      console.log("Full name:", `${person.firstName} ${person.lastName}`);
    }
    processResponse(response);
  })();
}

{
  //* Lookup Types
  ((): void => {
    type SubmitRequest = {
      transactionId: string;
      personal: {
        title: string;
        driverFirstName: string;
        driverMiddleName: string;
        driverLastName: string;
        email: string;
        phone: string;
        previousAliases: {
          firstName: string;
          middleName: string;
          lastName: string;
        }[];
        gender: string;
        dob: string;
        birthCountry: string;
      };
      driver: {
        licenseNumber: string;
        expiryDate: string;
        hasLicenseForMin6Months: boolean;
        hasTerritoryLicense: boolean;
        territoryLicenseStates?: string[];
        hasDriverAccreditation: boolean;
        driverAccreditationNumber?: string;
        vehicleClasses: string[];
        tandc: true;
      };
      consent: {
        understandInformation: boolean;
        informationTrue: boolean;
        informationConsidered: boolean;
        medicalVicRoadsPoliceCheckConsent: boolean;
        consentToDisclosing: boolean;
        indemnifyAgainstLiability: boolean;
        acicCheckConsent: boolean;
        childrenCheckConsent: boolean;
        personalInfoCheckConsent: boolean;
        trafficOffenses: boolean;
        assessAcicCheckConsent: boolean;
        criminalOffenses: boolean;
        licenseCancelledSuspended: boolean;
        sexOffendersReporting: boolean;
        ausWorkRights: boolean;
        additionalInformation: string;
      };
      payment: {
        creditCardToken: string;
      };
    };

    // UI
    type PaymentRequest = SubmitRequest["payment"];
    type PreviousAliasRequest = SubmitRequest["personal"]["previousAliases"][0];

    function getPayment(): PaymentRequest {
      return {
        creditCardToken: "124q234n12l!@#$3412n34!@#$",
      };
    }
  })();
}
