import React, { useEffect } from 'react'
import { DefaultOverlayContent } from '../components/DefaultOverlayContent'
import { ModelSection } from '../components/ModelSection'
import { ModelsWrapper } from '../components/ModelsWrapper'
import { UniqueOverlay } from '../components/UniqueOverlay'

import styles from '../styles/app.module.scss'

const Sections = [
  { "name": "Model S",
    "description": "Order Online for Touchless Delivery",
    "buttons": {
      "left": "Custom Order",
      "right": "Existing Inventory"
    }
  },
  { "name": "Model Y",
    "description": "Order Online for Touchless Delivery",
    "buttons": {
      "left": "Custom Order",
      "right": "Existing Inventory"
    }
  },
  { "name": "Model 3",
    "description": "Order Online for Touchless Delivery",
    "buttons": {
      "left": "Custom Order",
      "right": "Existing Inventory"
    }
  },
  { "name": "Model X",
    "description": "Order Online for Touchless Delivery",
    "buttons": {
      "left": "Custom Order",
      "right": "Existing Inventory"
    }
  },
  { "name": "Lowest Cost Solar Panels in America",
    "description": "Money-back guarantee",
    "buttons": {
      "left": "Order Now",
      "right": "Learn More"
    }
  },
  { "name": "Solar for New Roofs",
    "description": "Solar Roof Costs Less Than a New Roof Plus Solar Panels",
    "buttons": {
      "left": "Order Now",
      "right": "Learn More"
    }
  },
  { "name": "Accessories",
    "description": "",
    "buttons": {
      "left": "Shop Now",
      "right": ""
    }
  }
]

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.modelsWrapper}>
        <div>
          <ModelsWrapper>
            <div>
              {Sections.map(model => (
                <ModelSection
                  key={model.name}
                  modelName={model.name}
                  overlayNode={
                    <DefaultOverlayContent
                      label={model.name}
                      description={model.description}
                      leftButton={model.buttons.left}
                      rightButton={model.buttons.right}
                    />
                  }
                />
              ))}
            </div>

            <div className={styles.spacer} />
          </ModelsWrapper>
        </div>

        <div className={styles.spacer} />

        <UniqueOverlay />
      </div>
    </div>
  )
}
