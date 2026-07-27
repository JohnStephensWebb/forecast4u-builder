import type { Meta, StoryObj } from "@storybook/react";

import WeatherCard from "./WeatherCard";


const meta: Meta<typeof WeatherCard> = {
  title: "Components/WeatherCard",
  component: WeatherCard,

  parameters: {
    layout: "centered",
  },
};

export default meta;


type Story = StoryObj<typeof WeatherCard>;


export const SunnyDenver: Story = {
  args: {
    city: "Denver, CO",
    temperature: 72,
    condition: "Partly Cloudy",
    wind: 8,
    humidity: 41,
  },
};

