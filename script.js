// Configuration Data
const config = {
    currentStep: 1,
    formula: null,
    colors: [],
    effects: [],
    bottle: null,
    label: null,
    quantity: 100,
    shipping: null,
    pricing: {
        formulaCost: 0,
        colorCost: 0,
        effectsCost: 0,
        bottleCost: 0,
        labelCost: 0,
        discount: 0,
        shippingCost: 0,
        subtotal: 0,
        total: 0,
        perUnit: 0
    }
};

// Formula Data
const formulas = [
    {
        id: 'standard',
        name: 'Standard Polish',
        description: 'Traditional nail polish formula',
        basePrice: 2.20,
        dryTime: '5-7 minutes',
        wearTime: '5-7 days',
        features: ['Air dry', 'Easy removal', 'Wide color range'],
        available: true
    },
    {
        id: '10-free',
        name: '10-Free Formula',
        description: 'Free from 10 harmful chemicals',
        basePrice: 2.50,
        dryTime: '5-7 minutes',
        wearTime: '5-7 days',
        certifications: ['California Prop 65 compliant'],
        available: true
    },
    {
        id: '21-free',
        name: '21-Free Vegan',
        description: 'Premium clean formula, 100% vegan',
        basePrice: 2.80,
        dryTime: '4-6 minutes',
        wearTime: '7-10 days',
        certifications: ['PETA Vegan', 'Cruelty-Free'],
        available: true
    },
    {
        id: '24-free',
        name: '24-Free Ultra Clean',
        description: 'Cleanest formula, removes 24 harmful substances',
        basePrice: 3.20,
        dryTime: '4-6 minutes',
        wearTime: '7-10 days',
        certifications: ['PETA Vegan', 'Leaping Bunny'],
        premium: true,
        available: true
    },
    {
        id: 'gel-effect',
        name: 'Gel Effect (No UV)',
        description: 'Gel-like effect without UV lamp',
        basePrice: 4.50,
        dryTime: '3-5 minutes',
        wearTime: '7-10 days',
        features: ['Salon shine', 'No UV lamp', 'Chip-resistant'],
        popular: true,
        available: true
    }
];

// Color Data
const stockColors = [
    {
        id: 'ballet-slipper',
        name: 'Ballet Slipper',
        hex: '#F8DFD4',
        pantone: 'PANTONE 12-1209 TCX',
        category: 'nudes',
        popular: true
    },
    {
        id: 'mocha-mousse',
        name: 'Mocha Mousse',
        hex: '#A47764',
        pantone: 'PANTONE 17-1230 TCX',
        category: 'browns',
        trend: 'Pantone 2025 Color of the Year'
    },
    {
        id: 'classic-red',
        name: 'Classic Red',
        hex: '#C41230',
        pantone: 'PANTONE 19-1664 TCX',
        category: 'reds',
        popular: true
    },
    {
        id: 'midnight-blue',
        name: 'Midnight Blue',
        hex: '#003366',
        pantone: 'PANTONE 19-4029 TCX',
        category: 'blues'
    },
    {
        id: 'emerald-green',
        name: 'Emerald Green',
        hex: '#009B77',
        pantone: 'PANTONE 17-5641 TCX',
        category: 'greens'
    }
];

// Effects Data
const specialEffects = [
    {
        id: 'none',
        name: 'No Special Effect',
        description: 'Standard glossy finish',
        additionalCost: 0,
        compatible: ['all']
    },
    {
        id: 'chrome',
        name: 'Chrome/Mirror Finish',
        description: 'Mirror reflection effect',
        additionalCost: 2.50,
        compatible: ['gel-effect', 'standard', '21-free', '24-free'],
        popular: true,
        moq: 500
    },
    {
        id: 'holographic',
        name: 'Holographic',
        description: 'Rainbow holographic effect',
        additionalCost: 2.80,
        compatible: ['all'],
        popular: true,
        moq: 500
    },
    {
        id: 'glitter',
        name: 'Glitter',
        description: 'Sparkle effect',
        additionalCost: 1.50,
        compatible: ['all'],
        moq: 100
    },
    {
        id: 'matte',
        name: 'Matte Finish',
        description: 'Matte effect',
        additionalCost: 1.20,
        compatible: ['all'],
        moq: 100
    }
];

// Bottle Options
const bottleOptions = [
    {
        id: 'stock-round-10ml',
        name: '10ml Round Glass Bottle',
        size: '10ml',
        cost: 0.35,
        moq: 100,
        popular: true
    },
    {
        id: 'stock-square-12ml',
        name: '12ml Square Glass Bottle',
        size: '12ml',
        cost: 0.45,
        moq: 100,
        popular: true
    },
    {
        id: 'luxury-hexagon-12ml',
        name: '12ml Luxury Hexagon',
        size: '12ml',
        cost: 0.85,
        moq: 500,
        premium: true
    }
];

// Label Options
const labelOptions = [
    {
        id: 'no-label',
        name: 'No Label (Blank Bottles)',
        cost: 0,
        moq: 100
    },
    {
        id: 'standard-print',
        name: 'Standard Printed Label',
        cost: 0.15,
        moq: 500,
        setupFee: 150
    },
    {
        id: 'transparent-label',
        name: 'Transparent Clear Label',
        cost: 0.25,
        moq: 1000,
        setupFee: 200,
        popular: true
    }
];

// Pricing Tiers
const pricingTiers = [
    { min: 100, max: 499, discount: 0 },
    { min: 500, max: 999, discount: 0.05 },
    { min: 1000, max: 2999, discount: 0.10 },
    { min: 3000, max: 4999, discount: 0.15 },
    { min: 5000, max: 9999, discount: 0.20 },
    { min: 10000, max: Infinity, discount: 0.25 }
];

// Initialize the configurator
document.addEventListener('DOMContentLoaded', function() {
    initializeConfigurator();
    loadConfigurationFromURL();
    updatePreview();
    calculateTotalPrice();
});

function initializeConfigurator() {
    // Generate formula cards
    generateFormulaCards();
    
    // Generate color swatches
    generateColorSwatches();
    
    // Generate effect cards
    generateEffectCards();
    
    // Generate bottle options
    generateBottleOptions();
    
    // Generate label options
    generateLabelOptions();
    
    // Setup event listeners
    setupEventListeners();
}

function generateFormulaCards() {
    const formulaGrid = document.querySelector('.formula-grid');
    formulaGrid.innerHTML = '';
    
    formulas.forEach(formula => {
        const card = document.createElement('div');
        card.className = 'formula-card';
        card.dataset.formulaId = formula.id;
        
        let badge = '';
        if (formula.popular) {
            badge = '<div class="card-badge">POPULAR</div>';
        } else if (formula.premium) {
            badge = '<div class="card-badge" style="background: var(--accent-color);">PREMIUM</div>';
        }
        
        card.innerHTML = `
            ${badge}
            <div class="card-content">
                <h3>${formula.name} <span class="price">$${formula.basePrice.toFixed(2)}/unit</span></h3>
                <p class="description">${formula.description}</p>
                
                <div class="features">
                    ${formula.features ? formula.features.map(feature => 
                        `<span class="feature"><i class="fas fa-check"></i> ${feature}</span>`
                    ).join('') : ''}
                </div>
                
                <div class="specs">
                    <div class="spec-item">
                        <span class="label">Dry Time:</span>
                        <span class="value">${formula.dryTime}</span>
                    </div>
                    <div class="spec-item">
                        <span class="label">Wear Time:</span>
                        <span class="value">${formula.wearTime}</span>
                    </div>
                </div>
                
                <button class="select-btn" onclick="selectFormula('${formula.id}')">
                    ${config.formula && config.formula.id === formula.id ? 'Selected ✓' : 'Select Formula'}
                </button>
            </div>
        `;
        
        formulaGrid.appendChild(card);
    });
}

function generateColorSwatches() {
    const colorSelector = document.querySelector('.color-selector-content');
    colorSelector.innerHTML = `
        <div class="color-swatches">
            ${stockColors.map(color => `
                <div class="color-swatch ${config.colors.some(c => c.id === color.id) ? 'selected' : ''}" 
                     data-color-id="${color.id}"
                     onclick="selectColor('${color.id}')">
                    <div class="swatch-color" style="background: ${color.hex};">
                        <div class="select-indicator">
                            <i class="fas fa-check"></i>
                        </div>
                    </div>
                    <div class="swatch-info">
                        <div class="color-name">${color.name}</div>
                        <div class="pantone-code">${color.pantone}</div>
                        <div class="hex-code">${color.hex}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function generateEffectCards() {
    const effectsGrid = document.querySelector('.effects-grid');
    effectsGrid.innerHTML = '';
    
    specialEffects.forEach(effect => {
        const card = document.createElement('div');
        card.className = 'effect-card';
        card.dataset.effectId = effect.id;
        
        let badge = '';
        if (effect.popular) {
            badge = '<div class="effect-badge trending">🔥 TRENDING</div>';
        }
        
        card.innerHTML = `
            ${badge}
            <div class="effect-image-container">
                <div style="height: 150px; background: linear-gradient(45deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                    ${effect.name}
                </div>
            </div>
            
            <div class="effect-content">
                <h3>${effect.name}</h3>
                <p class="effect-price">${effect.additionalCost > 0 ? '+$' + effect.additionalCost.toFixed(2) + '/unit' : 'Included'}</p>
                <p class="description">${effect.description}</p>
                
                <div class="effect-specs">
                    ${effect.moq ? `
                    <div class="spec">
                        <i class="fas fa-box"></i>
                        <span>MOQ: ${effect.moq}</span>
                    </div>
                    ` : ''}
                </div>
                
                <button class="select-effect-btn" onclick="selectEffect('${effect.id}')">
                    ${config.effects.some(e => e.id === effect.id) ? 'Selected ✓' : 'Add Effect'}
                </button>
            </div>
        `;
        
        effectsGrid.appendChild(card);
    });
}

function generateBottleOptions() {
    const bottleSelector = document.querySelector('.bottle-selector-content');
    bottleSelector.innerHTML = `
        <div class="bottle-options">
            <div class="bottle-grid">
                ${bottleOptions.map(bottle => `
                    <div class="bottle-card ${config.bottle && config.bottle.id === bottle.id ? 'selected' : ''}" 
                         data-bottle-id="${bottle.id}">
                        <div class="bottle-image">
                            <div style="width: 100px; height: 200px; margin: 0 auto; background: #f0f0f0; border-radius: 10px; position: relative;">
                                <div style="position: absolute; top: 20px; left: 20px; right: 20px; bottom: 20px; background: white; border-radius: 5px;"></div>
                            </div>
                        </div>
                        
                        <h4>${bottle.name}</h4>
                        <p class="bottle-price">$${bottle.cost.toFixed(2)}/unit</p>
                        
                        <div class="bottle-specs">
                            <span><i class="fas fa-ruler"></i> ${bottle.size}</span>
                            <span><i class="fas fa-box"></i> MOQ: ${bottle.moq}</span>
                        </div>
                        
                        <button class="select-bottle-btn" onclick="selectBottle('${bottle.id}')">
                            ${config.bottle && config.bottle.id === bottle.id ? 'Selected ✓' : 'Select'}
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function generateLabelOptions() {
    const labelSelector = document.querySelector('.label-selector-content');
    labelSelector.innerHTML = `
        <div class="label-types">
            ${labelOptions.map(label => `
                <div class="label-card ${config.label && config.label.id === label.id ? 'selected' : ''}" 
                     data-label-id="${label.id}">
                    <div class="label-preview" style="height: 100px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; margin-bottom: 15px;">
                        <div style="width: 60%; height: 60%; background: white; border: 1px solid #ddd; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 12px;">Your Logo</span>
                        </div>
                    </div>
                    
                    <h4>${label.name}</h4>
                    <p class="label-price">
                        ${label.cost > 0 ? '+$' + label.cost.toFixed(2) + '/unit' : 'Included'}
                        ${label.setupFee ? ' + $' + label.setupFee + ' setup' : ''}
                    </p>
                    <p class="moq">MOQ: ${label.moq} bottles</p>
                    
                    <button class="select-label-btn" onclick="selectLabel('${label.id}')">
                        ${config.label && config.label.id === label.id ? 'Selected ✓' : 'Select'}
                    </button>
                </div>
            `).join('')}
        </div>
    `;
}

function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterFormulas(this.dataset.filter);
        });
    });
    
    // Tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            // You would implement tab switching logic here
        });
    });
    
    // Quantity slider
    const quantitySlider = document.getElementById('quantitySlider');
    const quantityInput = document.getElementById('quantityInput');
    
    if (quantitySlider && quantityInput) {
        quantitySlider.addEventListener('input', function() {
            config.quantity = parseInt(this.value);
            quantityInput.value = this.value;
            calculateTotalPrice();
            updatePreview();
        });
        
        quantityInput.addEventListener('change', function() {
            let value = parseInt(this.value);
            if (value < 100) value = 100;
            if (value > 10000) value = 10000;
            config.quantity = value;
            quantitySlider.value = value;
            this.value = value;
            calculateTotalPrice();
            updatePreview();
        });
    }
    
    // Quote form submission
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitQuoteRequest();
        });
    }
}

function selectFormula(formulaId) {
    const formula = formulas.find(f => f.id === formulaId);
    if (formula) {
        config.formula = formula;
        generateFormulaCards();
        updatePreview();
        calculateTotalPrice();
        
        // Send event to Google Tag Manager
        if (window.dataLayer) {
            window.dataLayer.push({
                'event': 'formula_selected',
                'formula_id': formula.id,
                'formula_name': formula.name,
                'formula_price': formula.basePrice
            });
        }
    }
}

function selectColor(colorId) {
    const color = stockColors.find(c => c.id === colorId);
    if (color) {
        // For now, let's just select one color
        config.colors = [color];
        generateColorSwatches();
        updatePreview();
        calculateTotalPrice();
        
        // Send event to Google Tag Manager
        if (window.dataLayer) {
            window.dataLayer.push({
                'event': 'color_selected',
                'color_id': color.id,
                'color_name': color.name,
                'pantone_code': color.pantone
            });
        }
    }
}

function selectEffect(effectId) {
    const effect = specialEffects.find(e => e.id === effectId);
    if (effect) {
        // For now, let's just select one effect
        config.effects = effect.id === 'none' ? [] : [effect];
        generateEffectCards();
        updatePreview();
        calculateTotalPrice();
        
        // Send event to Google Tag Manager
        if (window.dataLayer) {
            window.dataLayer.push({
                'event': 'effect_selected',
                'effect_id': effect.id,
                'effect_name': effect.name,
                'effect_price': effect.additionalCost
            });
        }
    }
}

function selectBottle(bottleId) {
    const bottle = bottleOptions.find(b => b.id === bottleId);
    if (bottle) {
        config.bottle = bottle;
        generateBottleOptions();
        updatePreview();
        calculateTotalPrice();
    }
}

function selectLabel(labelId) {
    const label = labelOptions.find(l => l.id === labelId);
    if (label) {
        config.label = label;
        generateLabelOptions();
        calculateTotalPrice();
    }
}

function calculateTotalPrice() {
    if (!config.formula || config.quantity < 100) return;
    
    // Base formula cost
    config.pricing.formulaCost = config.formula.basePrice * config.quantity;
    
    // Color cost (custom colors would have additional cost)
    config.pricing.colorCost = 0;
    
    // Effects cost
    config.pricing.effectsCost = config.effects.reduce((sum, effect) => 
        sum + (effect.additionalCost * config.quantity), 0);
    
    // Bottle cost
    config.pricing.bottleCost = config.bottle ? config.bottle.cost * config.quantity : 0;
    
    // Label cost
    config.pricing.labelCost = config.label ? 
        (config.label.cost * config.quantity) + (config.label.setupFee || 0) : 0;
    
    // Subtotal
    config.pricing.subtotal = 
        config.pricing.formulaCost +
        config.pricing.colorCost +
        config.pricing.effectsCost +
        config.pricing.bottleCost +
        config.pricing.labelCost;
    
    // Volume discount
    const tier = pricingTiers.find(t => 
        config.quantity >= t.min && config.quantity <= t.max);
    config.pricing.discount = tier ? 
        config.pricing.subtotal * tier.discount : 0;
    
    // Shipping (simplified for now)
    config.pricing.shippingCost = calculateShippingCost();
    
    // Total
    config.pricing.total = 
        config.pricing.subtotal - 
        config.pricing.discount + 
        config.pricing.shippingCost;
    
    // Per unit cost
    config.pricing.perUnit = config.pricing.total / config.quantity;
    
    // Update UI
    updatePriceDisplay();
    calculateROI();
}

function calculateShippingCost() {
    // Simplified shipping calculation
    if (config.quantity >= 5000) return 0; // Free shipping for large orders
    
    const baseShipping = 50;
    const perBottle = 0.10;
    
    return baseShipping + (config.quantity * perBottle);
}

function updatePriceDisplay() {
    // Update summary
    document.getElementById('summaryFormula').textContent = 
        config.formula ? config.formula.name : 'Not selected';
    document.getElementById('summaryColor').textContent = 
        config.colors.length > 0 ? config.colors[0].name : 'Not selected';
    document.getElementById('summaryEffect').textContent = 
        config.effects.length > 0 ? config.effects[0].name : 'None';
    document.getElementById('summaryBottle').textContent = 
        config.bottle ? config.bottle.name : 'Not selected';
    document.getElementById('summaryQuantity').textContent = 
        config.quantity + ' bottles';
    
    // Update prices
    document.getElementById('priceFormula').textContent = 
        '$' + config.pricing.formulaCost.toFixed(2);
    document.getElementById('priceColor').textContent = 
        '$' + config.pricing.colorCost.toFixed(2);
    document.getElementById('priceEffects').textContent = 
        '$' + config.pricing.effectsCost.toFixed(2);
    document.getElementById('priceBottle').textContent = 
        '$' + config.pricing.bottleCost.toFixed(2);
    document.getElementById('priceLabel').textContent = 
        '$' + config.pricing.labelCost.toFixed(2);
    document.getElementById('priceSubtotal').textContent = 
        '$' + config.pricing.subtotal.toFixed(2);
    document.getElementById('priceDiscount').textContent = 
        '-$' + config.pricing.discount.toFixed(2);
    document.getElementById('priceShipping').textContent = 
        '$' + config.pricing.shippingCost.toFixed(2);
    document.getElementById('priceTotal').textContent = 
        '$' + config.pricing.total.toFixed(2);
    document.getElementById('pricePerUnit').textContent = 
        '$' + config.pricing.perUnit.toFixed(2);
}

function calculateROI() {
    const retailPrice = parseFloat(document.getElementById('retailPrice').value) || 16.00;
    
    if (config.quantity < 100 || !config.pricing.total) return;
    
    const revenue = retailPrice * config.quantity;
    const profit = revenue - config.pricing.total;
    const margin = (profit / revenue) * 100;
    
    document.getElementById('roiMargin').textContent = margin.toFixed(1) + '%';
    document.getElementById('roiRevenue').textContent = '$' + revenue.toFixed(2);
    document.getElementById('roiProfit').textContent = '$' + profit.toFixed(2);
}

function updatePreview() {
    // Update bottle color
    const bottleColor = document.querySelector('.bottle-color');
    if (config.colors.length > 0) {
        bottleColor.style.background = config.colors[0].hex;
    } else {
        bottleColor.style.background = 'linear-gradient(45deg, #f8dfd4, #f3d0c3)';
    }
    
    // Update bottle size indicator
    const sizeIndicator = document.querySelector('.bottle-size-indicator');
    if (sizeIndicator) {
        sizeIndicator.textContent = config.bottle ? config.bottle.size : '10ml';
    }
}

function nextStep() {
    if (config.currentStep < 7) {
        // Hide current step
        document.getElementById(`step-${config.currentStep}`).classList.remove('active');
        
        // Update progress
        document.querySelector(`.step[data-step="${config.currentStep}"]`).classList.remove('active');
        
        // Go to next step
        config.currentStep++;
        
        // Show next step
        document.getElementById(`step-${config.currentStep}`).classList.add('active');
        document.querySelector(`.step[data-step="${config.currentStep}"]`).classList.add('active');
        
        // Update progress line
        const progressFill = document.querySelector('.progress-fill');
        progressFill.style.width = `${(config.currentStep / 7) * 100}%`;
    }
}

function prevStep() {
    if (config.currentStep > 1) {
        // Hide current step
        document.getElementById(`step-${config.currentStep}`).classList.remove('active');
        
        // Update progress
        document.querySelector(`.step[data-step="${config.currentStep}"]`).classList.remove('active');
        
        // Go to previous step
        config.currentStep--;
        
        // Show previous step
        document.getElementById(`step-${config.currentStep}`).classList.add('active');
        document.querySelector(`.step[data-step="${config.currentStep}"]`).classList.add('active');
        
        // Update progress line
        const progressFill = document.querySelector('.progress-fill');
        progressFill.style.width = `${(config.currentStep / 7) * 100}%`;
    }
}

function rotateBottle(degrees) {
    const bottle = document.querySelector('.bottle-body');
    if (bottle) {
        const currentRotation = parseInt(bottle.style.transform.replace('rotateY(', '').replace('deg)', '')) || 0;
        const newRotation = currentRotation + degrees;
        bottle.style.transform = `rotateY(${newRotation}deg)`;
    }
}

function resetBottleView() {
    const bottle = document.querySelector('.bottle-body');
    if (bottle) {
        bottle.style.transform = 'rotateY(0deg)';
    }
}

function showQuoteModal() {
    document.getElementById('quoteModal').style.display = 'flex';
    
    // Send event to Google Tag Manager
    if (window.dataLayer) {
        window.dataLayer.push({
            'event': 'quote_request_initiated',
            'configuration_value': config.pricing.total,
            'quantity': config.quantity
        });
    }
}

function closeQuoteModal() {
    document.getElementById('quoteModal').style.display = 'none';
}

function submitQuoteRequest() {
    const form = document.getElementById('quoteForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Get form data
    const formData = new FormData(form);
    const quoteData = {
        configuration: config,
        customer: {
            name: formData.get('name'),
            email: formData.get('email'),
            company: formData.get('company'),
            phone: formData.get('phone')
        },
        notes: formData.get('notes'),
        urgency: formData.get('urgency')
    };
    
    // Generate configuration ID
    const configId = 'LFL-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4).toUpperCase();
    
    // Save to localStorage
    localStorage.setItem('quote_' + configId, JSON.stringify(quoteData));
    
    // Show success modal
    document.getElementById('quoteModal').style.display = 'none';
    document.getElementById('configId').textContent = configId;
    document.getElementById('successModal').style.display = 'flex';
    
    // Send event to Google Tag Manager
    if (window.dataLayer) {
        window.dataLayer.push({
            'event': 'quote_request_submitted',
            'quote_id': configId,
            'customer_email': quoteData.customer.email,
            'total_value': config.pricing.total
        });
    }
}

function closeSuccessModal() {
    document.getElementById('successModal').style.display = 'none';
}

function saveConfiguration() {
    const configId = 'LFL-CONFIG-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    
    // Save to localStorage
    localStorage.setItem('config_' + configId, JSON.stringify(config));
    
    // Generate shareable link
    const encoded = btoa(JSON.stringify(config));
    const shareUrl = `${window.location.origin}${window.location.pathname}?config=${encoded}`;
    
    // Show alert
    alert(`Configuration saved!\n\nID: ${configId}\n\nShare link: ${shareUrl}`);
    
    // Send event to Google Tag Manager
    if (window.dataLayer) {
        window.dataLayer.push({
            'event': 'configuration_saved',
            'config_id': configId,
            'total_value': config.pricing.total
        });
    }
    
    return shareUrl;
}

function shareConfiguration() {
    const shareUrl = saveConfiguration();
    
    // Copy to clipboard
    navigator.clipboard.writeText(shareUrl).then(() => {
        alert('Share link copied to clipboard!');
    });
}

function resetConfiguration() {
    if (confirm('Are you sure you want to reset your configuration?')) {
        config.formula = null;
        config.colors = [];
        config.effects = [];
        config.bottle = null;
        config.label = null;
        config.quantity = 100;
        config.shipping = null;
        
        // Reset all selections
        generateFormulaCards();
        generateColorSwatches();
        generateEffectCards();
        generateBottleOptions();
        generateLabelOptions();
        
        // Reset to step 1
        config.currentStep = 1;
        document.querySelectorAll('.step-content').forEach(step => step.classList.remove('active'));
        document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
        document.getElementById('step-1').classList.add('active');
        document.querySelector('.step[data-step="1"]').classList.add('active');
        
        const progressFill = document.querySelector('.progress-fill');
        progressFill.style.width = '14.28%';
        
        // Update preview and pricing
        updatePreview();
        calculateTotalPrice();
        
        // Send event to Google Tag Manager
        if (window.dataLayer) {
            window.dataLayer.push({
                'event': 'configuration_reset'
            });
        }
    }
}

function loadConfigurationFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const encoded = urlParams.get('config');
    
    if (encoded) {
        try {
            const savedConfig = JSON.parse(atob(encoded));
            
            // Load formula
            if (savedConfig.formula) {
                selectFormula(savedConfig.formula.id);
            }
            
            // Load colors
            if (savedConfig.colors && savedConfig.colors.length > 0) {
                selectColor(savedConfig.colors[0].id);
            }
            
            // Load effects
            if (savedConfig.effects && savedConfig.effects.length > 0) {
                selectEffect(savedConfig.effects[0].id);
            }
            
            // Load bottle
            if (savedConfig.bottle) {
                selectBottle(savedConfig.bottle.id);
            }
            
            // Load label
            if (savedConfig.label) {
                selectLabel(savedConfig.label.id);
            }
            
            // Load quantity
            if (savedConfig.quantity) {
                config.quantity = savedConfig.quantity;
                const quantitySlider = document.getElementById('quantitySlider');
                const quantityInput = document.getElementById('quantityInput');
                if (quantitySlider) quantitySlider.value = savedConfig.quantity;
                if (quantityInput) quantityInput.value = savedConfig.quantity;
            }
            
            // Recalculate price
            calculateTotalPrice();
            updatePreview();
            
            console.log('Configuration loaded from URL');
            
        } catch (e) {
            console.error('Failed to load configuration from URL:', e);
        }
    }
}

function filterFormulas(filter) {
    const cards = document.querySelectorAll('.formula-card');
    
    cards.forEach(card => {
        const formulaId = card.dataset.formulaId;
        const formula = formulas.find(f => f.id === formulaId);
        
        let show = false;
        
        switch(filter) {
            case 'all':
                show = true;
                break;
            case 'clean':
                show = formula.id.includes('free');
                break;
            case 'vegan':
                show = formula.certifications && 
                       formula.certifications.some(c => c.includes('Vegan'));
                break;
            case 'fast':
                show = formula.dryTime && formula.dryTime.includes('2-3') ||
                       formula.dryTime && formula.dryTime.includes('3-5');
                break;
            default:
                show = true;
        }
        
        card.style.display = show ? 'block' : 'none';
    });
}
