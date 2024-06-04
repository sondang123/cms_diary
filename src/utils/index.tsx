export const utils = {
  renderStatusTheme: (params: string) => {
    switch (params) {
      case "active":
        break;

      default:
        return (
          <span className="typo-s15-w600 text-primary-2 py-1 px-2 rounded-2 bg-[#EAFAE4]">
            Active
          </span>
        );
        break;
    }
  },
};
