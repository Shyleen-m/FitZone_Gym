function showPlanInfo() {
    const selectedPlan = document.getElementById("planSelect").value;
    const allPlans = document.querySelectorAll(".plan-info");

    if (selectedPlan) {
        document.getElementById(selectedPlan).style.display = "block";
    }
}
