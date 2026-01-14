<div style={{ position: "relative", width: "280px" }}>
  {/* ALL BUTTON */}
  <button
    onClick={() => setShowAllPanel(!showAllPanel)}
    style={{
      width: "100%",
      padding: "6px 10px",
      border: "1px solid #666",
      backgroundColor: "#fff",
      fontWeight: 600,
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    All
    <span style={{ fontSize: "12px" }}>▼</span>
  </button>

  {/* DROPDOWN PANEL */}
  {showAllPanel && (
    <div
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        width: "100%",
        border: "1px solid #666",
        backgroundColor: "#fff",
        zIndex: 10,
        padding: "8px",
      }}
    >
      {/* SEARCH BAR */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "8px",
        }}
      >
        <i className="pi pi-search" style={{ color: "#666" }} />
        <InputText
          value={treeFilterValue}
          placeholder="Search by Asset Name"
          style={{ width: "100%" }}
          onChange={(e) => setTreeFilterValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
        />
      </div>

      {/* PLACEHOLDER FOR TREE / LIST */}
      <div style={{ fontSize: "13px", color: "#888" }}>
        Asset list / Tree here
      </div>
    </div>
  )}
</div>
