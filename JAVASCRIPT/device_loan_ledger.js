const equipmentLedger = {
  1: {
    type: "PC",
    status: "CheckedOut",
    borrower: { name: "John Smith", email: "john@acme.org" },
    dueDate: "11/30/2025",
  },
  2: {
    type: "Laptop",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
  3: {
    type: "Laptop",
    status: "CheckedOut",
    borrower: { name: "Jane Doe", email: "jane@acme.org" },
    dueDate: "10/31/2025",
  },
  4: {
    type: "iPad",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
};

const serializeLedger = (ledger) => {
  return JSON.stringify(ledger);
};
const loadLedger = (json) => {
  return JSON.parse(json);
};

const checkoutDevice = (ledger, assetTag, borrower) => {
  if (!Object.keys(ledger).includes(assetTag)) {
    return {
      ledger,
      message: `Equipment ${assetTag} not found.`,
    };
  }
  if (ledger[assetTag].status === "CheckedOut") {
    return {
      ledger,
      message: `Equipment ${assetTag} is already checked out.`,
    };
  }

  const clonedLedger = loadLedger(serializeLedger(ledger));
  clonedLedger[assetTag].borrower = borrower;
  clonedLedger[assetTag].status = "CheckedOut";

  return {
    ledger: clonedLedger,
    message: `Equipment ${assetTag} has been checked out to ${borrower.name}`,
  };
};

const checkinDevice = (ledger, assetTag) => {
  if (!Object.keys(ledger).includes(assetTag)) {
    return {
      ledger,
      message: `Equipment ${assetTag} not found.`,
    };
  }

  const clonedLedger = loadLedger(serializeLedger(ledger));
  clonedLedger[assetTag].borrower = { name: "", email: "" };
  clonedLedger[assetTag].dueDate = "";
  clonedLedger[assetTag].status = "CheckedIn";

  return {
    ledger: clonedLedger,
    message: `Equipment ${assetTag} has been checked in.`,
  };
};

const listOverdueDevices = (ledger, today) => {
  const overdueDevices = Object.values(ledger).filter((device) => {
    if (device.status === "CheckedOut" && device.dueDate) {
      const dueDateParts = device.dueDate.split("/").map(Number);
      const todayParts = today.split("/").map(Number);
      return (
        dueDateParts[2] < todayParts[2] ||
        (dueDateParts[2] === todayParts[2] &&
          dueDateParts[0] < todayParts[0]) ||
        (dueDateParts[2] === todayParts[2] &&
          dueDateParts[0] === todayParts[0] &&
          dueDateParts[1] < todayParts[1])
      );
    }
  });

  overdueDevices.sort((a, b) => {
    const dateA = a.dueDate.split("/").map(Number);
    const dateB = b.dueDate.split("/").map(Number);
    return dateA[2] - dateB[2] || dateA[0] - dateB[0] || dateA[1] - dateB[1];
  });

  return overdueDevices;
};
