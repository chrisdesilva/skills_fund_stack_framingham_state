import logo from "../images/logo_fsu.png" // add school logo to images folder and import here

export const applicationsLive = true // set to false if not currently accepting applications
export const disabledLoanAppFormID = "69140c47-bb03-4a1b-b674-cc136fdea23d" // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = "October 29, 2019"
export const showPopup = false

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = {
  // term details section
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APRRange36: "11.50 - 12.36%",
  APRRange60: "12.80 - 13.14%",
  interestOnly: [
    {
      // for multiple examples of interest only, add items to interestOnly array
      programName: "",
      APR36: "11.50%",
      financeCharge36: "$2,489.27",
      IOPayment36: "$78.62",
      FullMonthlyPayment36: "$333.68",
      APR60: "12.80%",
      financeCharge60: "$4,269.42",
      IOPayment60: "$96.11",
      FullMonthlyPayment60: "$228.13",
      LoanExampleAmt: "$9,995",
      LoanExampleOFeeAmt: "$499.75",
      LoanExampleAmtPlusOFee: "$10,494.75",
      programLength: "4", // program length in months
    },
  ],
  immediateRepayment: [
    {
      // for multiple examples of immmediate repayment, add items to immediateRepayment array
      programName: "",
      APR36: "12.36%",
      financeCharge36: "$2,017.53",
      FullMonthlyPayment36: "$333.68",
      APR60: "13.14%",
      financeCharge60: "$3,692.74",
      FullMonthlyPayment60: "$228.13",
      LoanExampleAmt: "$9,995",
      LoanExampleOFeeAmt: "$499.75",
      LoanExampleAmtPlusOFee: "$10,494.75",
    },
  ],
}

export const interestRateCards = {
  // 3 month program, 3 months grace for term details section
  APR36: "8.95 - 17.21%",
  APR60: "10.00 - 17.24%",
  immediateRepayment: {
    int36: "6.50 - 13.75%",
    int60: "8.25 - 15.00%",
    // APR36: "9.82% - 17.21%",
    // APR60: "10.34% - 17.24%",
  },
  interestOnly: {
    int36: "6.50 - 13.75%",
    int60: "8.25 - 15.00%",
    // APR36: "8.87 - 16.29%",
    // APR60: "9.96 - 16.87%",
  },
  deferred: {
    int36: "7.00 - 14.25%",
    int60: "8.75 - 15.50%",
    // APR36: "9.24 - 16.43%",
    // APR60: "9.90 - 16.68%",
  },
}

export const previewText = {
  headline: "Simple. Flexible.",
  subheadline:
    "We offer loans tailored to your needs. Preview your options and select the right financing solution for you.",
  // headline: "Simple. Clear.",
  // subheadline:
  //   "We offer a straightforward loan so you can focus on your program and transform your future.",
  cards: [
    {
      heading: "Deferred Repayment",
      body: "Make no payments while you study and for three months after.",
    },
    {
      heading: "Interest Only",
      body:
        "Make low interest-only payments while you study and for three months after completing your program.",
    },
    {
      heading: "Immediate Repayment",
      body: "Start paying your loan back one month after your program begins.",
    },
    // {
    //   heading: "36-Month Loan",
    //   // body:
    //   //   "Pay off your loan faster. Start paying your loan back one month after your program begins, and make 36 monthly payments until your loan is repaid.",
    //   body:
    //     "Start paying your loan back one month after your program begins, and make 36 monthly payments until your loan is repaid.",
    // },
    // {
    //   heading: "60-Month Loan",
    //   body:
    //     "Make smaller monthly payments. Start paying your loan back one month after your program begins, and make 60 monthly payments until your loan is repaid.",
    // },
  ],
}

export const faq = {
  // faq section
  costOfLiving: false, // true if at least one program has cost of living included
  costOfLivingPrograms: "", // leave as empty string is cost of living availability is the same across all programs
  multCostOfLivingPrograms: false, // true if costOfLivingPrograms string has more than one program
  interestOnly: true, // true if interest-only payments are an option
  immediateRepayment: true, // true if immediate repayment is an option
  multipleLoanLengths: true, // true if 36 and 60 month options are both available
  multipleLoanTypes: true, // true if both IR and IO are available
  multiPrograms: true, // only true if there are multiple programs
  onlinePrograms: false, // true if at least one program is remote/online
  schoolHQState: "WA",
  origFee: 0.05,

  // interest payment FAQ info
  exampleLoanAmount: "$9,995",
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APR36: "11.50%",
  APR60: "12.80%",
  IOPayment36: "$78.66",
  IOPayment60: "$96.11",

  // max loan amounts by program for faq1
  loanRange: [
    {
      programName: "Web Development",
      maxAmount: "$11,995",
      col: false,
      colAmount: "$6,000",
    },
    {
      programName: "Data Science & Analytics",
      maxAmount: "$11,995",
      col: false,
      colAmount: "$6,000",
    },
    // {
    //   programName: "Clinical Trial Management",
    //   maxAmount: "$9,995",
    //   col: false,
    //   colAmount: "$6,000",
    // },
  ],
}

// ***** END TERMS AND FAQ INFO *****

// ***** BEGIN GENERAL SCHOOL INFO *****

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "Framingham State University"

export const schoolURL = "#" // update with url of school's website

export const skfURL = "https://framinghamstate.skills.fund" // update with Skills Fund url

export const headline = "Learn New Skills at Framingham State University" // update headline as appropriate

export const leadContent = {
  header: "Your last step on the path toward changing your career",
  paragraph: `${schoolName} designs its programs to cover multiple stacks of programming languages to help graduates develop a diverse skill-set. ${schoolName} partners with Skills Fund to offer tuition${
    faq.costOfLiving ? " and cost of living" : ""
  } financing so more students like you can access their program.`,
}

export const threeStepCardText = {
  step1: "",
  step2: {
    header: "select your program",
    text:
      "Choose between the Web Development and Data Science & Analytics programs.",
  },
  step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`,
}

export const netlifyFormName = "framinghamstate_contact"

export const GATracking = "UA-68312423-1"

export const hubspotFormId = "5d08fd0e-2850-4b57-b4ae-0ec8bb37ad9f" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_framinghamstate_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO *****

// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 9995
export const placeholder = "$9,995"
export const interestRates = {
  ir36: 8.99,
  ir60: 10.99,
}
export const moreThanSixPrograms = false // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [
  // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
  {
    name: "Web Development",
    url: "https://my.skills.fund/application?lenderCode=SFSEFSUWD20",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 9995,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        // interest-only
        k: 7,
        apr36: 11.5,
        apr60: 12.8,
      },
      "Immediate Repayment": {
        apr36: 12.36,
        apr60: 13.14,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: true, // true if both IR and IO are available
    loanTypes: ["Interest Only", "Immediate Repayment"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 9995,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 7,
            apr36: 11.5,
            apr60: 12.8,
          },
          "Immediate Repayment": {
            apr36: 12.36,
            apr60: 13.14,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Data Science & Analytics",
    url: "https://my.skills.fund/application?lenderCode=SFSEFSUDSA20",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 9995,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        // interest-only
        k: 7,
        apr36: 11.5,
        apr60: 12.8,
      },
      "Immediate Repayment": {
        apr36: 12.36,
        apr60: 13.14,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false,
    showLoanTypes: true,
    loanTypes: ["Interest Only", "Immediate Repayment"],
    locations: ["Metro 1", "Metro 2"],
    metros: [
      {
        location: "Metro 1",
        loanInfo: {
          maxLoanAmt: 9995,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            // interest-only
            k: 7,
            apr36: 11.5,
            apr60: 12.8,
          },
          "Immediate Repayment": {
            apr36: 12.36,
            apr60: 13.14,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  // {
  //   name: "Clinical Trial Management",
  //   url: "https://my.skills.fund/application?lenderCode=SFSEFSUCTM20",
  //   loanInfo: {
  //     // match loanInfo in first metro below
  //     maxLoanAmt: 9995,
  //     loanTerm36: true,
  //     loanTerm60: true,
  //     "Interest Only": {
  //       // interest-only
  //       k: 7,
  //       apr36: 11.50,
  //       apr60: 12.80,
  //     },
  //     "Immediate Repayment": {
  //       apr36: 12.36,
  //       apr60: 13.14,
  //     },
  //   },
  //   defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
  //   showMetros: false,
  //   showLoanTypes: true,
  // loanTypes: ["Interest Only", "Immediate Repayment"],
  // locations: ["Metro A", "Metro B", "Metro C"],
  //   metros: [
  //     {
  //       location: "Metro A",
  //       loanInfo: {
  //         maxLoanAmt: 9995,
  //         loanTerm36: true,
  //         loanTerm60: true,
  //         "Interest Only": {
  //           // interest-only
  //           k: 7,
  //           apr36: 11.50,
  //           apr60: 12.80,
  //         },
  //         "Immediate Repayment": {
  //           apr36: 12.36,
  //           apr60: 13.14,
  //         },
  //       },
  //     },
  //     {
  //       location: "Metro B",
  //       loanInfo: {
  //         maxLoanAmt: 15545,
  //         loanTerm36: true,
  //         loanTerm60: true,
  //         "Interest Only": {
  //           k: 5,
  //           apr36: 11.16,
  //           apr60: 12.51,
  //         },
  //         "Immediate Repayment": {
  //           apr36: 11.25,
  //           apr60: 12.55,
  //         },
  //       },
  //     },
  //     {
  //       location: "Metro C",
  //       loanInfo: {
  //         maxLoanAmt: 20545,
  //         loanTerm36: true,
  //         loanTerm60: true,
  //         "Interest Only": {
  //           k: 5,
  //           apr36: 11.16,
  //           apr60: 12.51,
  //         },
  //         "Immediate Repayment": {
  //           apr36: 11.25,
  //           apr60: 12.55,
  //         },
  //       },
  //     },
  //   ],
  // },
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText =
  "Choose the loan amount that works best for you. Borrow up to $9,995 in tuition for each of Framingham State University's programs."

export const paymentTable = {
  headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
  data: [
    {
      name: "PROGRAM 1",
      tuition: "$13,495",
      col: "$6,000",
      max: "$19,495",
    },
    {
      name: "PROGRAM 2",
      tuition: "$16,495",
      col: "$6,000",
      max: "$22,495",
    },
    {
      name: "PROGRAM 3",
      tuition: "$13,495",
      col: "--",
      max: "$13,495",
    },
  ],
  show: false,
}

// ***** END LOAN CALC TEXT INFO *****

// ***** Snippets for Netlify *****

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>

// before body Yotpo

// <script type="text/javascript"> (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0, e.src="//staticw2.yotpo.com/vDnpGV6DFy9oeKaj5UugzYG5TCeQ4gxgEVs9BO3n/widget.js";var t=document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e,t)})(); </script>
