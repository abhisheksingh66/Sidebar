const MDMAssetInformation = observer(() => {
  const [treeFilterValue, setTreeFilterValue] = useState("");

  const handleAllClick = () => {
    setTreeFilterValue("");
    // 👉 optionally reset selected node / expand all
    // setSelectedNode(null);
  };

  return (
    <div className="treeHeader">
      {/* ===== All Button ===== */}
      <button className="allBtn" onClick={handleAllClick}>
        All
      </button>

      {/* ===== Search Bar ===== */}
      <div className="treeHeaderSearch">
        <i className="pi pi-search" />
        <InputText
          value={treeFilterValue}
          placeholder="Search by Asset Name"
          className="w-full treeSearchInput"
          onChange={(e) => setTreeFilterValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
        />
      </div>
    </div>
  );
});
