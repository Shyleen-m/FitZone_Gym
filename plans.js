<script>
    function showPlanInfo() {
        const selectedPlan = document.getElementById("planSelect").value;
        const allPlans = document.querySelectorAll(".plan-info");

        // Hide all plans first
        allPlans.forEach(plan => {
        plan.style.display = "none";
});

            // Display the selected plan
            if (selectedPlan) {
            document.getElementById(selectedPlan).style.display = "block";
        }
    }
</script>