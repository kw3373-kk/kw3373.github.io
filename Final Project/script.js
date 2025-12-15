document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------
    // 1. PRIMARY INTERACTION (hermes-authority.html): Highlight Toggler
    // ----------------------------------------------------------------
    
    // DOM Queries (Required 1 of 2)
    const highlightButton = document.querySelector('#toggle-analysis-btn');
    const analysisSummary = document.querySelector('#analysis-summary');
    
    if (highlightButton && analysisSummary) {
        // Ensure the initial state attribute exists for reliable state tracking
        if (!analysisSummary.getAttribute('data-highlighted')) {
            analysisSummary.setAttribute('data-highlighted', 'false');
        }

        // Function called in response to a DOM event (Required 1 of 1)
        highlightButton.addEventListener('click', function toggleHighlight() {
            // Check state using the data attribute (more robust than checking CSS color)
            const isHighlighted = analysisSummary.getAttribute('data-highlighted') === 'true';

            if (isHighlighted) {
                // Update CSS properties (Required 1 of 1)
                analysisSummary.style.backgroundColor = 'transparent';
                analysisSummary.style.padding = '0';
                analysisSummary.style.borderRadius = '0';
                highlightButton.textContent = 'Highlight Analysis';
                analysisSummary.setAttribute('data-highlighted', 'false'); 
                
                // Update page content (Required 1 of 1)
                analysisSummary.textContent = 'By refusing to play by the rules of mass-market luxury, Hermès establishes itself as the standard against which all other luxury brands are measured. This positioning is the ultimate demonstration of authority, allowing them to dictate the terms of engagement with the customer, rather than the other way around.';
            } else {
                // Update CSS properties (Required 1 of 1)
                analysisSummary.style.backgroundColor = 'rgb(255, 235, 205)'; // Light orange/cream
                analysisSummary.style.padding = '15px';
                analysisSummary.style.borderRadius = '8px';
                highlightButton.textContent = 'Remove Highlight';
                analysisSummary.setAttribute('data-highlighted', 'true'); 

                // Update page content (Required 1 of 1)
                analysisSummary.textContent = 'HIGHLIGHTED: Hermès establishes itself as the *standard* against which all other luxury brands are measured. This ultimate demonstration of authority allows them to dictate the terms of engagement with the customer.';
            }
        });
    }

    // ----------------------------------------------------------------
    // 2. SECONDARY INTERACTION (strategy.html): Day-of-the-Week Message
    // ----------------------------------------------------------------
    
    // DOM Query (Required 2 of 2)
    const strategyTipContainer = document.querySelector('#strategy-tip');
    
    if (strategyTipContainer) {
        const today = new Date();
        const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        let dailyMessage = '';

        switch (dayOfWeek) {
            case 0: // Sunday
                dailyMessage = 'SUNDAY SPOTLIGHT: The only thing harder than getting a Birkin is Sunday brunch reservations.';
                break;
            case 1: // Monday
                dailyMessage = 'MONDAY MOTIVATION: Start the week by cultivating your own authoritative reputation.';
                break;
            case 2: // Tuesday
                dailyMessage = 'TUESDAY TRIVIA: Did you know some Hermès scarves take 2 years to produce? Authority is built on time.';
                break;
            case 3: // Wednesday
                dailyMessage = 'WEDNESDAY WISDOM: Scarcity is just Authority wearing a limited-edition badge.';
                break;
            case 4: // Thursday
                dailyMessage = 'THURSDAY THOUGHT: Think about which brands you defer to without question—that is their authority.';
                break;
            case 5: // Friday
                dailyMessage = 'FRIDAY FOCUS: Luxury brands thrive because they command the market, not follow it.';
                break;
            case 6: // Saturday
                dailyMessage = 'SATURDAY STRATEGY: Take a moment to analyze your favorite influencer’s source of authority.';
                break;
            default:
                dailyMessage = 'Today is a great day to learn about influence!';
        }

        // Add a new paragraph with the dynamic content update
        strategyTipContainer.innerHTML += `<p class="daily-tip"><strong>Daily Tip:</strong> ${dailyMessage}</p>`;
    }
});