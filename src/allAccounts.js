const allAccounts = [
  {
    id: 1,
    PRINCIPAL: "$5,000",
    PAYMENTS: "$250",
    BALANCE: "$4,750",
    LINKED_BALANCE: "$6,000",
    CLIENT: "John Doe",
    ACCOUNT_TYPE: "Personal Loan",
    STATUS: "Active",
    CREDITOR: "ABC Bank",
    ACCOUNT_NUMBER: "123456",
    ORIGINATED: "01/01/2021",
    ACCOUNT_RECEIVED: "02/01/2021",
    COLLECTOR: "XYZ Collections",
    CLIENT_CLAIM_NUMBER: "456789",
    CHARGED_OFF: "No",
    PURCHASED: "No",
    QUEUE: "High Priority",
    LAST_PAYMENT: "$250 (01/28/2023)",
    NEXT_WORK: "$250 (03/01/2023)",
    DEBTOR_PMT_ID: "987654",
    REFERRING: "None",
    AGE: "2 years",
    DELINQ_1: "30 days",
    PAYMENT_PORTAL: "Online",
    SALES_REP: "Jane Smith",
    IMPORTED_ON: "01/15/2021",
    ORIGINAL_CHECK_NUMBER: "1234",
    LANDLORD_PHONE_NUMBER: "(555) 555-1212",
    ITEM_A: "Red",
    ITEM_B: "Blue",
    ITEM_C: "Green",
    RENT_AMOUNT: "$1,500",
    PRODUCT: "Home Loan",
    PROP_OWNER_ADDRESS: "123 Main St",
    PROP: "Single Family Home",
    PROP_LOAN_AMOUNT: "$300,000",
    PROP_OWNER_LENDER: "ABC Mortgage",
    CO_SIGNER_FIRST: "Bob",
    CO_SIGNER_LAST: "Smith",
    CO_SIGNER_SSN: "123-45-6789",
    RELATIVE_1_STATE: "CA",
    RELATIVE_1_CITY: "Los Angeles",
    TLO_POE: "Status",
    TLO_POE_NUMBER: "123456",
    TLO_ADDRESS: "456 Main St",
    TLO_CITY: "San Francisco",
    TLO_STATE: "CA",
    TLO_ADDRESS_2: "789 Main St",
    TLO_CITY_2: "San Diego",
    TLO_STATE_2: "CA",
    TLO_PHONE: "(555) 555-1212",
    TLO_PHONE_2: "(555) 555-1213",
    TLO_PHONE_3: "(555) 555-1214",
    TLO_PHONE_4: "(555) 555-1215",
    TLO_PHONE_5: "(555) 555-1216",
    TLO_ADDRESS_2: "None",
    TLO_STATE_2: "None",
    RELATIVE_1: "Sally Smith",
    RELATIVE_1_ADDY: "123 Main",
    RELATIVE_1_PH1: "567-345-1234",
    RELATIVE_1_PH2: "678-456-2345",
    RELATIVE_1_PH3: "789-567-3456",
    RELATIVE_2: "Jane Doe",
    RELATIVE_2_ADDY: "123 Main St, Anytown USA 12345",
    RELATIVE_2_PH1: "234-567-6789",
    RELATIVE_2_PH2: "345-678-7890",
    RELATIVE_2_PH3: "456-789-8901",
    RELATIVE_3: "John Smith",
    RELATIVE_3_ADDY: "456 Main St, Anytown USA 12345",
    RELATIVE_3_PH1: "567-890-1234",
    RELATIVE_3_PH2: "678-901-2345",
    RELATIVE_3_PH3: "789-012-3456",
    RELATIVE_4: "Jane Smith",
    RELATIVE_4_ADDY: "789 Main St, Anytown USA 12345",
    RELATIVE_4_PH1: "890-123-4567",
    RELATIVE_4_PH2: "901-234-5678",
    RELATIVE_4_PH3: "012-345-6789",
    RELATIVE_5: "John Doe",
    RELATIVE_5_ADDY: "111 Main St, Anytown USA 12345",
    RELATIVE_5_PH1: "111-222-3333",
    RELATIVE_5_PH2: "222-333-4444",
    RELATIVE_5_PH3: "333-444-5555",
    BANK_ACCT_NAME: "John Smith",
    BANK_ROUTING: "123456789",
    BANK_ACCT_NUMBER: "987654321",
    LAST_PAYMENT: "500.00",
    DATE_LAST_PAYMENT: "01/01/2023",
    DATE_OF_LAST_CHARGE: "01/01/2022",
    BANKRUPTCY: "Yes",
    DISCHARGED: "Yes",
    PDF: "Debtor_Document.pdf",
    GENERATE_DEBTOR_DOCUMENT_NOTIFICATIONS: "Yes",
    SSN: "123-45-6789",
    DOB: "01/01/1980",
    ATTORNEY: "Smith & Associates",
    EMPLOYER: "ABC Inc.",
    ACTION_CODES: "L1, L2, L3",
    LETTER_FLOWS: "A, B, C",
    NOTES: [
      {
        id: 1,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "Remind clients of due dates: A note to remind clients of their due dates and the consequences of not paying on time.",
      },
      {
        id: 2,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to document all communication with clients, including phone calls and emails, for record keeping purposes.",
      },
      {
        id: 3,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to use friendly but firm language when communicating with clients, and avoid using aggressive or threatening language.",
      },
      {
        id: 4,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to offer payment plan options to clients who are unable to pay the full amount owed.",
      },
      {
        id: 5,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to escalate cases to the agency's legal team if necessary, such as when clients are repeatedly late on payments or unwilling to pay.",
      },
      {
        id: 6,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to maintain client privacy and ensure all communication and personal information is handled in accordance with relevant laws and regulations.",
      },
      {
        id: 7,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to stay up-to-date on debt collection laws and regulations, and ensure the agency is operating within legal bounds.",
      },
      {
        id: 8,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to track and analyze data, such as the success rate of payment plans and the number of cases escalated to the legal team, to continuously improve the collections process",
      },
    ],
    CALL_DISPOSITIONS: "Left Message, No Answer, Call Back Later",
  },
  {
    id: 2,
    PRINCIPAL: "$5,000",
    PAYMENTS: "$250",
    BALANCE: "$4,750",
    LINKED_BALANCE: "$6,000",
    CLIENT: "John Doe",
    ACCOUNT_TYPE: "Personal Loan",
    STATUS: "Active",
    CREDITOR: "ABC Bank",
    ACCOUNT_NUMBER: "123456",
    ORIGINATED: "01/01/2021",
    ACCOUNT_RECEIVED: "02/01/2021",
    COLLECTOR: "XYZ Collections",
    CLIENT_CLAIM_NUMBER: "456789",
    CHARGED_OFF: "No",
    PURCHASED: "No",
    QUEUE: "High Priority",
    LAST_PAYMENT: "$250 (01/28/2023)",
    NEXT_WORK: "$250 (03/01/2023)",
    DEBTOR_PMT_ID: "987654",
    REFERRING: "None",
    AGE: "2 years",
    DELINQ_1: "30 days",
    PAYMENT_PORTAL: "Online",
    SALES_REP: "Jane Smith",
    IMPORTED_ON: "01/15/2021",
    ORIGINAL_CHECK_NUMBER: "1234",
    LANDLORD_PHONE_NUMBER: "(555) 555-1212",
    ITEM_A: "Red",
    ITEM_B: "Blue",
    ITEM_C: "Green",
    RENT_AMOUNT: "$1,500",
    PRODUCT: "Home Loan",
    PROP_OWNER_ADDRESS: "123 Main St",
    PROP: "Single Family Home",
    PROP_LOAN_AMOUNT: "$300,000",
    PROP_OWNER_LENDER: "ABC Mortgage",
    CO_SIGNER_FIRST: "Bob",
    CO_SIGNER_LAST: "Smith",
    CO_SIGNER_SSN: "123-45-6789",
    RELATIVE_1_STATE: "CA",
    RELATIVE_1_CITY: "Los Angeles",
    TLO_POE: "Status",
    TLO_POE_NUMBER: "123456",
    TLO_ADDRESS: "456 Main St",
    TLO_CITY: "San Francisco",
    TLO_STATE: "CA",
    TLO_ADDRESS_2: "789 Main St",
    TLO_CITY_2: "San Diego",
    TLO_STATE_2: "CA",
    TLO_PHONE: "(555) 555-1212",
    TLO_PHONE_2: "(555) 555-1213",
    TLO_PHONE_3: "(555) 555-1214",
    TLO_PHONE_4: "(555) 555-1215",
    TLO_PHONE_5: "(555) 555-1216",
    TLO_ADDRESS_2: "None",
    TLO_STATE_2: "None",
    RELATIVE_1: "Sally Smith",
    RELATIVE_1_ADDY: "123 Main",
    RELATIVE_1_PH1: "567-345-1234",
    RELATIVE_1_PH2: "678-456-2345",
    RELATIVE_1_PH3: "789-567-3456",
    RELATIVE_2: "Jane Doe",
    RELATIVE_2_ADDY: "123 Main St, Anytown USA 12345",
    RELATIVE_2_PH1: "234-567-6789",
    RELATIVE_2_PH2: "345-678-7890",
    RELATIVE_2_PH3: "456-789-8901",
    RELATIVE_3: "John Smith",
    RELATIVE_3_ADDY: "456 Main St, Anytown USA 12345",
    RELATIVE_3_PH1: "567-890-1234",
    RELATIVE_3_PH2: "678-901-2345",
    RELATIVE_3_PH3: "789-012-3456",
    RELATIVE_4: "Jane Smith",
    RELATIVE_4_ADDY: "789 Main St, Anytown USA 12345",
    RELATIVE_4_PH1: "890-123-4567",
    RELATIVE_4_PH2: "901-234-5678",
    RELATIVE_4_PH3: "012-345-6789",
    RELATIVE_5: "John Doe",
    RELATIVE_5_ADDY: "111 Main St, Anytown USA 12345",
    RELATIVE_5_PH1: "111-222-3333",
    RELATIVE_5_PH2: "222-333-4444",
    RELATIVE_5_PH3: "333-444-5555",
    BANK_ACCT_NAME: "John Smith",
    BANK_ROUTING: "123456789",
    BANK_ACCT_NUMBER: "987654321",
    LAST_PAYMENT: "500.00",
    DATE_LAST_PAYMENT: "01/01/2023",
    DATE_OF_LAST_CHARGE: "01/01/2022",
    BANKRUPTCY: "Yes",
    DISCHARGED: "Yes",
    PDF: "Debtor_Document.pdf",
    GENERATE_DEBTOR_DOCUMENT_NOTIFICATIONS: "Yes",
    SSN: "123-45-6789",
    DOB: "01/01/1980",
    ATTORNEY: "Smith & Associates",
    EMPLOYER: "ABC Inc.",
    ACTION_CODES: "L1, L2, L3",
    LETTER_FLOWS: "A, B, C",
    NOTES: [
      {
        id: 1,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "Remind clients of due dates: A note to remind clients of their due dates and the consequences of not paying on time.",
      },
      {
        id: 2,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to document all communication with clients, including phone calls and emails, for record keeping purposes.",
      },
      {
        id: 3,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to use friendly but firm language when communicating with clients, and avoid using aggressive or threatening language.",
      },
      {
        id: 4,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to offer payment plan options to clients who are unable to pay the full amount owed.",
      },
      {
        id: 5,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to escalate cases to the agency's legal team if necessary, such as when clients are repeatedly late on payments or unwilling to pay.",
      },
      {
        id: 6,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to maintain client privacy and ensure all communication and personal information is handled in accordance with relevant laws and regulations.",
      },
      {
        id: 7,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to stay up-to-date on debt collection laws and regulations, and ensure the agency is operating within legal bounds.",
      },
      {
        id: 8,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to track and analyze data, such as the success rate of payment plans and the number of cases escalated to the legal team, to continuously improve the collections process",
      },
    ],
    CALL_DISPOSITIONS: "Left Message, No Answer, Call Back Later",
  },
  {
    id: 3,
    PRINCIPAL: "$5,000",
    PAYMENTS: "$250",
    BALANCE: "$4,750",
    LINKED_BALANCE: "$6,000",
    CLIENT: "John Doe",
    ACCOUNT_TYPE: "Personal Loan",
    STATUS: "Active",
    CREDITOR: "ABC Bank",
    ACCOUNT_NUMBER: "123456",
    ORIGINATED: "01/01/2021",
    ACCOUNT_RECEIVED: "02/01/2021",
    COLLECTOR: "XYZ Collections",
    CLIENT_CLAIM_NUMBER: "456789",
    CHARGED_OFF: "No",
    PURCHASED: "No",
    QUEUE: "High Priority",
    LAST_PAYMENT: "$250 (01/28/2023)",
    NEXT_WORK: "$250 (03/01/2023)",
    DEBTOR_PMT_ID: "987654",
    REFERRING: "None",
    AGE: "2 years",
    DELINQ_1: "30 days",
    PAYMENT_PORTAL: "Online",
    SALES_REP: "Jane Smith",
    IMPORTED_ON: "01/15/2021",
    ORIGINAL_CHECK_NUMBER: "1234",
    LANDLORD_PHONE_NUMBER: "(555) 555-1212",
    ITEM_A: "Red",
    ITEM_B: "Blue",
    ITEM_C: "Green",
    RENT_AMOUNT: "$1,500",
    PRODUCT: "Home Loan",
    PROP_OWNER_ADDRESS: "123 Main St",
    PROP: "Single Family Home",
    PROP_LOAN_AMOUNT: "$300,000",
    PROP_OWNER_LENDER: "ABC Mortgage",
    CO_SIGNER_FIRST: "Bob",
    CO_SIGNER_LAST: "Smith",
    CO_SIGNER_SSN: "123-45-6789",
    RELATIVE_1_STATE: "CA",
    RELATIVE_1_CITY: "Los Angeles",
    TLO_POE: "Status",
    TLO_POE_NUMBER: "123456",
    TLO_ADDRESS: "456 Main St",
    TLO_CITY: "San Francisco",
    TLO_STATE: "CA",
    TLO_ADDRESS_2: "789 Main St",
    TLO_CITY_2: "San Diego",
    TLO_STATE_2: "CA",
    TLO_PHONE: "(555) 555-1212",
    TLO_PHONE_2: "(555) 555-1213",
    TLO_PHONE_3: "(555) 555-1214",
    TLO_PHONE_4: "(555) 555-1215",
    TLO_PHONE_5: "(555) 555-1216",
    TLO_ADDRESS_2: "None",
    TLO_STATE_2: "None",
    RELATIVE_1: "Sally Smith",
    RELATIVE_1_ADDY: "123 Main",
    RELATIVE_1_PH1: "567-345-1234",
    RELATIVE_1_PH2: "678-456-2345",
    RELATIVE_1_PH3: "789-567-3456",
    RELATIVE_2: "Jane Doe",
    RELATIVE_2_ADDY: "123 Main St, Anytown USA 12345",
    RELATIVE_2_PH1: "234-567-6789",
    RELATIVE_2_PH2: "345-678-7890",
    RELATIVE_2_PH3: "456-789-8901",
    RELATIVE_3: "John Smith",
    RELATIVE_3_ADDY: "456 Main St, Anytown USA 12345",
    RELATIVE_3_PH1: "567-890-1234",
    RELATIVE_3_PH2: "678-901-2345",
    RELATIVE_3_PH3: "789-012-3456",
    RELATIVE_4: "Jane Smith",
    RELATIVE_4_ADDY: "789 Main St, Anytown USA 12345",
    RELATIVE_4_PH1: "890-123-4567",
    RELATIVE_4_PH2: "901-234-5678",
    RELATIVE_4_PH3: "012-345-6789",
    RELATIVE_5: "John Doe",
    RELATIVE_5_ADDY: "111 Main St, Anytown USA 12345",
    RELATIVE_5_PH1: "111-222-3333",
    RELATIVE_5_PH2: "222-333-4444",
    RELATIVE_5_PH3: "333-444-5555",
    BANK_ACCT_NAME: "John Smith",
    BANK_ROUTING: "123456789",
    BANK_ACCT_NUMBER: "987654321",
    LAST_PAYMENT: "500.00",
    DATE_LAST_PAYMENT: "01/01/2023",
    DATE_OF_LAST_CHARGE: "01/01/2022",
    BANKRUPTCY: "Yes",
    DISCHARGED: "Yes",
    PDF: "Debtor_Document.pdf",
    GENERATE_DEBTOR_DOCUMENT_NOTIFICATIONS: "Yes",
    SSN: "123-45-6789",
    DOB: "01/01/1980",
    ATTORNEY: "Smith & Associates",
    EMPLOYER: "ABC Inc.",
    ACTION_CODES: "L1, L2, L3",
    LETTER_FLOWS: "A, B, C",
    NOTES: [
      {
        id: 1,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "Remind clients of due dates: A note to remind clients of their due dates and the consequences of not paying on time.",
      },
      {
        id: 2,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to document all communication with clients, including phone calls and emails, for record keeping purposes.",
      },
      {
        id: 3,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to use friendly but firm language when communicating with clients, and avoid using aggressive or threatening language.",
      },
      {
        id: 4,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to offer payment plan options to clients who are unable to pay the full amount owed.",
      },
      {
        id: 5,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to escalate cases to the agency's legal team if necessary, such as when clients are repeatedly late on payments or unwilling to pay.",
      },
      {
        id: 6,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to maintain client privacy and ensure all communication and personal information is handled in accordance with relevant laws and regulations.",
      },
      {
        id: 7,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to stay up-to-date on debt collection laws and regulations, and ensure the agency is operating within legal bounds.",
      },
      {
        id: 8,
        timestamp: "2/10/2022 1:26:15 PM",
        note: "A note to track and analyze data, such as the success rate of payment plans and the number of cases escalated to the legal team, to continuously improve the collections process",
      },
    ],
    CALL_DISPOSITIONS: "Left Message, No Answer, Call Back Later",
  },
];
export default allAccounts;
