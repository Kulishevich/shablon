'use client';
import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './YandexMap.module.scss';
import { VectorCustomizationItem } from '@yandex/ymaps3-types';
import mapStyles from '@/shared/config/constants/maps-styles.json';

declare global {
  interface Window {
    ymaps3: typeof import('@yandex/ymaps3-types');
  }
}

const Marker = () => {
  const container = document.createElement('div');
  container.className = styles.container;
  const image = document.createElement('img');
  image.id = 'marker-image';
  image.alt = 'Маркер';
  image.className = styles.image;
  image.src =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ3LjA4NTQgMTQuMTQ0QzM4Ljc1NDggNS45NDkzOCAyNS4yNDgxIDUuOTQ5MzggMTYuOTE3NCAxNC4xNDRDOC41ODY3NyAyMi4zNDE0IDguNTg2NzcgMzUuNjI5NCAxNi45MTc0IDQzLjgyNEwzMi4wMDAxIDU4LjY2NEw0Ny4wODU0IDQzLjgyNEM1NS40MTYxIDM1LjYyOTQgNTUuNDE2MSAyMi4zNDE0IDQ3LjA4NTQgMTQuMTQ0Wk0zMi4wMDAxIDM1Ljk5NzRDMzAuMjE4OCAzNS45OTc0IDI4LjU0NjggMzUuMzA0IDI3LjI4NTQgMzQuMDQ1NEMyNC42ODU0IDMxLjQ0NTQgMjQuNjg1NCAyNy4yMTYgMjcuMjg1NCAyNC42MTZDMjguNTQ0MSAyMy4zNTc0IDMwLjIxODggMjIuNjY0IDMyLjAwMDEgMjIuNjY0QzMzLjc4MTQgMjIuNjY0IDM1LjQ1NjEgMjMuMzU3NCAzNi43MTQ4IDI0LjYxNkMzOS4zMTQ4IDI3LjIxNiAzOS4zMTQ4IDMxLjQ0OCAzNi43MTQ4IDM0LjA0NTRDMzUuNDU2MSAzNS4zMDQgMzMuNzgxNCAzNS45OTc0IDMyLjAwMDEgMzUuOTk3NFoiIGZpbGw9IiMyNTMzOEMiLz4KPC9zdmc+Cg==';
  container.appendChild(image);

  return container;
};

export function YandexMap({
  className,
  address,
  coordinatesOffset,
}: {
  className?: string;
  address?: string;
  coordinatesOffset?: [number, number];
}) {
  const mapRef = useRef(null);

  useEffect(() => {
    async function initMap() {
      if (mapRef.current && address) {
        await ymaps3.ready;

        const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

        const searchResponse = await ymaps3.search({ text: address });

        const coordinates = searchResponse[0]?.geometry?.coordinates;

        const map = new YMap(
          mapRef.current,
          {
            location: {
              center: [
                ((coordinates && coordinates[0]) || 0) + (coordinatesOffset?.[0] || 0),
                ((coordinates && coordinates[1]) || 0) + (coordinatesOffset?.[1] || 0),
              ],
              zoom: 16,
            },
            mode: 'vector',
          },
          [
            new YMapDefaultSchemeLayer({
              customization: mapStyles as VectorCustomizationItem[],
            }),
            new YMapDefaultFeaturesLayer({}),
          ]
        );

        map.addChild(
          new YMapMarker(
            {
              coordinates: coordinates || [0, 0],
              draggable: false,
              mapFollowsOnDrag: true,
            },
            Marker()
          )
        );
      }
    }

    initMap();
  }, [mapRef, address]);

  return (
    <>
      <section ref={mapRef} className={clsx(styles.map, className)} />
    </>
  );
}
