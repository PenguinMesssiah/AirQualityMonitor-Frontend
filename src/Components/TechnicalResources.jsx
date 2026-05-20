import { useState } from 'react';
import { Card, Row, Col, Accordion } from 'react-bootstrap';

function TechnicalResources() {
  return (
    <>
      <div style={{ padding: "1rem 0", fontFamily: "var(--font-sans)" }}>

        {/* System Architecture Section */}
        <section className="mb-5">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--color-text-primary)" }}>
            System Architecture
          </h2>
          <p className="mb-3" style={{ color: "var(--color-text-secondary)" }}>
            Our air quality monitoring system is built on a three-tier architecture that captures, processes, and visualizes environmental data in real-time.
          </p>

          {/* Architecture Diagram - Collapsible */}
          <Accordion className="mb-4">
            <Accordion.Item eventKey="tier1">
              <Accordion.Header>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{
                    background: '#CECBF6',
                    color: '#3C3489',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    Tier 1
                  </span>
                  <strong>Air Quality Monitoring Units</strong>
                </div>
              </Accordion.Header>
              <Accordion.Body style={{ background: '#CECBF6', border: '2px solid #3C3489', borderTop: 'none' }}>
                <div style={{ color: '#3C3489', fontSize: '0.95rem' }}>
                  <p className="mb-2"><strong>Hardware Components:</strong></p>
                  <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                    <li><strong>Adafruit Feather M4 Express</strong> - ARM Cortex M4 microcontroller (120MHz, 512KB Flash)</li>
                    <li><strong>AirLift FeatherWing ESP32</strong> - WiFi co-processor for network connectivity</li>
                    <li><strong>BME280 Sensor</strong> - Temperature, humidity, and barometric pressure sensing</li>
                    <li><strong>PM2.5 Air Quality Sensor</strong> - Particulate matter detection</li>
                    <li><strong>3D Printed Enclosure</strong> - Custom housing for environmental protection</li>
                  </ul>
                  <p className="mt-2"><strong>Function:</strong> Captures environmental data every hour and transmits via WiFi</p>
                </div>
                <div style={{ textAlign: 'center', fontSize: '1.5rem', color: '#3C3489', marginTop: '1rem', fontWeight: 'bold' }}>
                  ↓ WiFi Data Transmission ↓
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="tier2">
              <Accordion.Header>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{
                    background: '#9FE1CB',
                    color: '#085041',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    Tier 2
                  </span>
                  <strong>Backend Server (Raspberry Pi)</strong>
                </div>
              </Accordion.Header>
              <Accordion.Body style={{ background: '#9FE1CB', border: '2px solid #085041', borderTop: 'none' }}>
                <div style={{ color: '#085041', fontSize: '0.95rem' }}>
                  <p className="mb-2"><strong>Tech Stack:</strong></p>
                  <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                    <li><strong>Flask</strong> - Python web framework with Flask-CORS</li>
                    <li><strong>MongoDB</strong> - NoSQL database for time-series data</li>
                    <li><strong>PyMongo</strong> - MongoDB driver for Python</li>
                    <li><strong>Cloudflare Tunnel</strong> - Secure tunneling for public access</li>
                    <li><strong>Python 3.x</strong> - Core programming language</li>
                  </ul>
                  <p className="mt-2"><strong>Function:</strong> Receives sensor data via HTTP POST, validates, stores in database, and serves data via REST API</p>
                </div>
                <div style={{ textAlign: 'center', fontSize: '1.5rem', color: '#085041', marginTop: '1rem', fontWeight: 'bold' }}>
                  ↓ RESTful API (HTTP/JSON) ↓
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="tier3">
              <Accordion.Header>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{
                    background: '#B5D4F4',
                    color: '#0C447C',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    Tier 3
                  </span>
                  <strong>Web Dashboard (Frontend)</strong>
                </div>
              </Accordion.Header>
              <Accordion.Body style={{ background: '#B5D4F4', border: '2px solid #0C447C', borderTop: 'none' }}>
                <div style={{ color: '#0C447C', fontSize: '0.95rem' }}>
                  <p className="mb-2"><strong>Tech Stack:</strong></p>
                  <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                    <li><strong>React</strong> - Component-based UI library</li>
                    <li><strong>Vite</strong> - Modern build tool and development server</li>
                    <li><strong>React Bootstrap</strong> - UI component library</li>
                    <li><strong>Recharts</strong> - Data visualization library</li>
                    <li><strong>Leaflet</strong> - Interactive mapping for sensor locations</li>
                  </ul>
                  <p className="mt-2"><strong>Function:</strong> Visualizes air quality data with charts, maps, and EPA AQI compliance indicators for community access</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>

        {/* Hardware Components Detail */}
        <section className="mb-5">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--color-text-primary)" }}>
            Hardware Components & Specifications
          </h2>

          <Row className="g-3">
            <Col md={6}>
              <Card style={{ height: '100%', border: '1px solid #ddd' }}>
                <Card.Body>
                  <Card.Title style={{ color: '#3C3489', fontWeight: 'bold' }}>
                    Adafruit Feather M4 Express
                  </Card.Title>
                  <Card.Text style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                    <strong>Purpose:</strong> Main microcontroller for sensor data acquisition<br/>
                    <strong>Specs:</strong> 120MHz ARM Cortex M4, 512KB Flash, 192KB RAM<br/>
                    <a href="https://www.adafruit.com/product/3857" target="_blank" rel="noopener noreferrer"
                       style={{ color: '#0C447C' }}>Product Page</a> |
                    <a href="https://learn.adafruit.com/adafruit-feather-m4-express-atsamd51" target="_blank" rel="noopener noreferrer"
                       style={{ color: '#0C447C', marginLeft: '0.5rem' }}>Documentation</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card style={{ height: '100%', border: '1px solid #ddd' }}>
                <Card.Body>
                  <Card.Title style={{ color: '#3C3489', fontWeight: 'bold' }}>
                    AirLift FeatherWing ESP32
                  </Card.Title>
                  <Card.Text style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                    <strong>Purpose:</strong> WiFi co-processor for network connectivity<br/>
                    <strong>Specs:</strong> ESP32 chip with 802.11 b/g/n WiFi, TLS/SSL support<br/>
                    <a href="https://www.adafruit.com/product/4264" target="_blank" rel="noopener noreferrer"
                       style={{ color: '#0C447C' }}>Product Page</a> |
                    <a href="https://learn.adafruit.com/adafruit-airlift-featherwing-esp32-wifi-co-processor-featherwing/overview" target="_blank" rel="noopener noreferrer"
                       style={{ color: '#0C447C', marginLeft: '0.5rem' }}>Documentation</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card style={{ height: '100%', border: '1px solid #ddd' }}>
                <Card.Body>
                  <Card.Title style={{ color: '#3C3489', fontWeight: 'bold' }}>
                    BME280 Temperature & Humidity Sensor
                  </Card.Title>
                  <Card.Text style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                    <strong>Purpose:</strong> Environmental temperature, humidity, and pressure sensing<br/>
                    <strong>Interface:</strong> I2C or SPI communication<br/>
                    <a href="https://www.adafruit.com/product/2652" target="_blank" rel="noopener noreferrer"
                       style={{ color: '#0C447C' }}>Product Page</a> |
                    <a href="https://learn.adafruit.com/adafruit-bme280-humidity-barometric-pressure-temperature-sensor-breakout" target="_blank" rel="noopener noreferrer"
                       style={{ color: '#0C447C', marginLeft: '0.5rem' }}>Documentation</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card style={{ height: '100%', border: '1px solid #ddd' }}>
                <Card.Body>
                  <Card.Title style={{ color: '#3C3489', fontWeight: 'bold' }}>
                    PM2.5 Air Quality Sensor
                  </Card.Title>
                  <Card.Text style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                    <strong>Purpose:</strong> Detection of fine particulate matter (PM2.5)<br/>
                    <strong>Interface:</strong> UART communication<br/>
                    <a href="https://www.adafruit.com/product/3686" target="_blank" rel="noopener noreferrer"
                       style={{ color: '#0C447C' }}>Product Page</a> |
                    <a href="https://learn.adafruit.com/pm25-air-quality-sensor" target="_blank" rel="noopener noreferrer"
                       style={{ color: '#0C447C', marginLeft: '0.5rem' }}>Documentation</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Assembly Instructions & Curriculum */}
        <section className="mb-5">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--color-text-primary)" }}>
            Build Your Own: Assembly Guides & Lectures
          </h2>
          <p className="mb-3" style={{ color: "var(--color-text-secondary)" }}>
            All of our workshop materials are freely available for anyone interested in building their own air quality monitoring system.
            Follow along with our step-by-step curriculum designed for learners of all ages and experience levels.
          </p>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <strong>Workshop Slides & Presentations</strong>
              </Accordion.Header>
              <Accordion.Body style={{ background: 'var(--color-background-secondary)' }}>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                  Access all workshop presentation materials covering electricity basics through full system integration:
                </p>
                <ul style={{ lineHeight: '2', color: 'var(--color-text-secondary)' }}>
                  <li><a target="_blank" href="https://docs.google.com/presentation/d/1pH7JUPhOq5Zae4a-dEeQkdlfa92PQF8uGnGvTzCD8TQ/edit?usp=sharing" style={{ color: '#0C447C' }}>Full Guide: Overview & Soldering</a></li>                  
                  <p className='italic text-sm'>
                    <strong>Note:</strong> Lessons were originally taught with the DHT20 Temperature/Humidity Sensor, ESP32 WiFi Co-Processor Breakout, and Metro328 Microcontroller 
                    for their educational benefits. The final assembly utilizes the BME280 and the Feather M4 Express for their smaller form factor and higher compatability. 
                  </p>
                  <li><a target="_blank" href="https://docs.google.com/presentation/d/1SXKhsf37YdQKHS6LLVJYP8vWC8YiyTBNZTPgGtc8JVY/edit?usp=sharing" style={{ color: '#0C447C' }}>Week 1: Electricity & Electronics Fundamentals</a></li>
                  <li><a target="_blank" href="https://docs.google.com/presentation/d/1vjgNcDupHP59h_oiUa0pMOdFUTTiTGH4aKfoUmkXm0M/edit?usp=sharing" style={{ color: '#0C447C' }}>Week 2: Programming in Arduino IDE</a></li>
                  <li><a target="_blank" href="https://docs.google.com/presentation/d/1m1q06rhK5h-F6F0vk1a7PS4G7b-8hyPf5AAk4lAFi2A/edit?usp=sharing" style={{ color: '#0C447C' }}>Week 3: Communication Protocols (I2C, SPI, UART)</a></li>
                  <li><a target="_blank" href="https://docs.google.com/presentation/d/1pH7JUPhOq5Zae4a-dEeQkdlfa92PQF8uGnGvTzCD8TQ/edit?usp=sharing" style={{ color: '#0C447C' }}>Week 4: BME280 Sensor Integration</a></li>
                  <li><a target="_blank" href="https://docs.google.com/presentation/d/1mmoysfW83SLSiK5DZT1TYDzvZVOhqd-1xVBBANkmNfw/edit?usp=sharing" style={{ color: '#0C447C' }}>Week 5: Air Quality & Environmental Justice Discussion</a></li>
                  <li><a target="_blank" href="https://docs.google.com/presentation/d/1mmoysfW83SLSiK5DZT1TYDzvZVOhqd-1xVBBANkmNfw/edit?usp=sharing" style={{ color: '#0C447C' }}>Week 6: PM2.5 Sensor Integration</a></li>
                  <li><a target="_blank" href="https://docs.google.com/presentation/d/1pH7JUPhOq5Zae4a-dEeQkdlfa92PQF8uGnGvTzCD8TQ/edit?usp=sharing" style={{ color: '#0C447C' }}>Week 7-8: Soldering & Full Board Assembly</a></li>
                  <li><a target="_blank" href="https://docs.google.com/presentation/d/19mGSvsa6HftqjbjT-gIrnkcuaLSLBWj2p-aVMRsS1ck/edit?usp=sharing" style={{ color: '#0C447C' }}>Week 9: Object-Oriented Programming</a></li>
                  <li><a target="_blank" href="https://docs.google.com/presentation/d/1JLfr0hfwz9Cb6lZ8HbTYn6mZQerZs9K58BboRx8NqDw/edit?usp=sharing" style={{ color: '#0C447C' }}>Week 10: WiFi Connectivity & ESP32</a></li>
                  <li><a target="_blank" href="https://docs.google.com/presentation/d/14nja7qbDrw6mMaKbitmffAdPmMH5OJB-C0JovrZURDY/edit?usp=sharing" style={{ color: '#0C447C' }}>Week 11: WiFi Connectivity & ESP32</a></li>
                  <li><a target="_blank" href="https://docs.google.com/presentation/d/1IywkPhMOOG_dXoiJHNGKoNb52iV6VKCe-Xe9Efx_s2s/edit?usp=sharing" style={{ color: '#0C447C' }}>Week 12: WiFi Connectivity & ESP32</a></li>
                  <li><a target="_blank" href="https://docs.google.com/presentation/d/1HRhs2e7-0qiE-oln06GQu2lrcETxW0TG9BxLv9Kh-GI/edit?usp=sharing" style={{ color: '#0C447C' }}>Week 13: HTTP Protocols & Web Integration</a></li>
                  <li><a target="_blank" href="https://docs.google.com/presentation/d/1x9pM9920GW2eExwpH__j_UO0SzR9Z_ZQKmw3R2FhcyI/edit?usp=sharing" style={{ color: '#0C447C' }}>Week 14: HTTP Protocols & Web Integration</a></li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <strong>Assembly Photos & Visual Guides</strong>
              </Accordion.Header>
              <Accordion.Body style={{ background: 'var(--color-background-secondary)' }}>
                <Row className="g-3">
                  <Col xs={6} md={4}>
                    <img src="/photos/IMG_0466.jpeg" alt="Assembled Boards"
                         style={{ width: '100%', borderRadius: '4px', border: '1px solid #ddd' }} />
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                      Fully Assembled Unit with Enclosure
                    </p>
                  </Col>
                  <Col xs={6} md={4}>
                    <img src="/photos/IMG_0467.jpeg" alt="Assembled Boards"
                         style={{ width: '100%', borderRadius: '4px', border: '1px solid #ddd' }} />
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                      Fully Assembled Unit
                    </p>
                  </Col>
                  <Col xs={6} md={4}>
                    <img src="/photos/bme280_starter.jpg" alt="BME280 Initial Setup"
                         style={{ width: '100%', borderRadius: '4px', border: '1px solid #ddd' }} />
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                      BME280 Sensor Preparation
                    </p>
                  </Col>
                  <Col xs={6} md={4}>
                    <img src="/photos/feather_board.jpg" alt="Feather M4 Board"
                         style={{ width: '100%', borderRadius: '4px', border: '1px solid #ddd' }} />
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                      Soldered Feather M4 Express Board
                    </p>
                  </Col>
                  <Col xs={6} md={4}>
                    <img src="/photos/airlift_board.jpg" alt="AirLift Board"
                         style={{ width: '100%', borderRadius: '4px', border: '1px solid #ddd' }} />
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                      Soldered AirLift FeatherWing
                    </p>
                  </Col>
                  <Col xs={6} md={4}>
                    <img src="/photos/bme280_complete_solder.jpg" alt="BME280 Soldered"
                         style={{ width: '100%', borderRadius: '4px', border: '1px solid #ddd' }} />
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                      BME280 Soldered Headers
                    </p>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <strong>Code Repositories & Documentation</strong>
              </Accordion.Header>
              <Accordion.Body style={{ background: 'var(--color-background-secondary)' }}>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                  All project code is open source and available on GitHub:
                </p>
                <ul style={{ lineHeight: '2', color: 'var(--color-text-secondary)' }}>
                  <li>
                    <a href="https://github.com/PenguinMesssiah/AirQualityMontior-Frontend" target='_blank' style={{ color: '#0C447C', fontWeight: 'bold' }}>Frontend Repository (React/Vite)</a> -
                    Web dashboard for data visualization
                  </li>
                  <li>
                    <a href="https://github.com/PenguinMesssiah/HazelwoodServer" target='_blank' style={{ color: '#0C447C', fontWeight: 'bold' }}>Backend Repository (Flask/MongoDB)</a> -
                    RESTful API and data storage
                  </li>
                  <li>
                    <a href="https://github.com/PenguinMesssiah/HazelwoodServer/tree/main/HazelwoodSendData" target='_blank' style={{ color: '#0C447C', fontWeight: 'bold' }}>Arduino Firmware</a> -
                    Sensor code for Feather M4 microcontroller
                  </li>
                  <li>
                    <a href="https://www.adafruit.com/product/3931" target='_blank' style={{ color: '#0C447C', fontWeight: 'bold' }}>3D Enclosure</a> -
                    Flanged Weatherproof Enclosure With PG-7 Cable Glands
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>

        {/* Additional Resources */}
        <section className="mb-5">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--color-text-primary)" }}>
            Additional Learning Resources
          </h2>

          <Card style={{ border: '1px solid #ddd' }}>
            <Card.Body>
              <h5 style={{ color: '#3C3489', marginBottom: '1rem' }}>Environmental Justice & Air Quality</h5>
              <ul style={{ lineHeight: '2', color: 'var(--color-text-secondary)' }}>
                <li>
                  <a href="https://www.epa.gov/environmental-justice" target="_blank" rel="noopener noreferrer" style={{ color: '#0C447C' }}>
                    EPA Environmental Justice Resources
                  </a>
                </li>
                <li>
                  <a href="https://www.airnow.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#0C447C' }}>
                    AirNow.gov - Current Air Quality Index Information
                  </a>
                </li>
                <li>
                  <a href="https://www.breatheproject.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#0C447C' }}>
                    Breathe Project - Pittsburgh Air Quality Advocacy
                  </a>
                </li>
              </ul>

              <h5 style={{ color: '#3C3489', marginBottom: '1rem', marginTop: '1.5rem' }}>Technical Learning</h5>
              <ul style={{ lineHeight: '2', color: 'var(--color-text-secondary)' }}>
                <li>
                  <a href="https://learn.adafruit.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#0C447C' }}>
                    Adafruit Learning System - Electronics & Programming Tutorials
                  </a>
                </li>
                <li>
                  <a href="https://www.arduino.cc/en/Tutorial/HomePage" target="_blank" rel="noopener noreferrer" style={{ color: '#0C447C' }}>
                    Arduino Official Tutorials
                  </a>
                </li>
                <li>
                  <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" style={{ color: '#0C447C' }}>
                    React Documentation - Frontend Development
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </section>

        {/* Acknowledgments */}
        <section className="mb-4">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--color-text-primary)" }}>
            Acknowledgments
          </h2>
          <Card style={{ background: '#f7daacff', border: '2px solid #633806' }}>
            <Card.Body>
              <p style={{ color: '#633806', marginBottom: '0.75rem' }}>
                This project was made possible through the collaborative efforts of:
              </p>
              <ul style={{ color: '#633806', lineHeight: '2', marginBottom: 0 }}>
                <li><strong>Arts Excursion Unlimited</strong> - Community partnership and workshop facilitation</li>
                <li><strong>Carnegie Mellon University, Social Haptics Robotics & Education Lab</strong> - Technical guidance and research support</li>
                <li><strong>Carnegie Mellon University, Block Center </strong> - Financial support through grants & awards</li>
                <li><strong>Greenfield, Hazelwood, and Glen-Hazel Community Members</strong> - Active participation and invaluable feedback</li>
                <li><strong>Community Partners</strong> - Local organizations supporting environmental justice initiatives</li>
              </ul>
            </Card.Body>
          </Card>
        </section>

      </div>
    </>
  );
}

export default TechnicalResources;
