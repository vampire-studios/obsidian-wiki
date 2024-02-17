import { ExtendedSidebarItem } from "./utils";

export default [
  {
    text: "bedrock.title",
    link: "/bedrock/",
    collapsed: false,
    items: [
      {
        text: "Fabric API GitHub",
        link: "https://github.com/FabricMC/fabric"
      },
      {
        text: "Yarn GitHub",
        link: "https://github.com/FabricMC/yarn"
      },
      {
        text: "Loom GitHub",
        link: "https://github.com/FabricMC/fabric-loom"
      }
    ]
  },
  {
    text: "bedrock.items",
    collapsed: true,
    items: [
      {
        text: "bedrock.items.potions",
        link: "/bedrock/items/potions",
      }
    ]
  },
  {
    text: "bedrock.entities",
    collapsed: true,
    items: [
      {
        text: "bedrock.entities.effects",
        link: "/bedrock/entities/effects"
      }
    ]
  },
  {
    text: "bedrock.commands",
    collapsed: true,
    items: [
      {
        text: "bedrock.commands.basics",
        link: "/bedrock/commands/basics"
      },
      {
        text: "bedrock.commands.arguments",
        link: "/bedrock/commands/arguments"
      },
      {
        text: "bedrock.commands.suggestions",
        link: "/bedrock/commands/suggestions"
      }
    ]
  },
  {
    text: "bedrock.rendering",
    collapsed: true,
    items: [
      {
        text: "bedrock.rendering.basicConcepts",
        link: "/bedrock/rendering/basic-concepts"
      },
      {
        text: "bedrock.rendering.drawContext",
        link: "/bedrock/rendering/draw-context"
      },
      {
        text: "bedrock.rendering.hud",
        link: "/bedrock/rendering/hud"
      },
      {
        text: "bedrock.rendering.gui",
        items: [
          {
            text: "bedrock.rendering.gui.customScreens",
            link: "/bedrock/rendering/gui/custom-screens"
          },
          {
            text: "bedrock.rendering.gui.customWidgets",
            link: "/bedrock/rendering/gui/custom-widgets"
          }
        ]
      },
      {
        text: "bedrock.rendering.particles",
        items: [
          {
            text: "bedrock.rendering.particles.creatingParticles",
            link: "/bedrock/rendering/particles/creating-particles"
          }
        ]
      },
    ]
  },
  {
    text: "bedrock.misc",
    collapsed: true,
    items: [
      {
        text: "bedrock.misc.codecs",
        link: "/bedrock/codecs"
      },
      {
        text: "bedrock.misc.events",
        link: "/bedrock/events"
      }
    ]
  }
] as ExtendedSidebarItem[];